'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { AppHero, ellipsify } from '../ui/ui-layout'
import { ExplorerLink } from '../cluster/cluster-ui'
import { useJournalProgram } from './journal-data-access'
import { JournalCreate, JournalList } from './journal-ui'

export default function JournalFeature() {
  const { publicKey } = useWallet()
  const { programId } = useJournalProgram()

  return publicKey ? (
    <div>
      <AppHero
        title="Journal"
        subtitle={
          'Create a new journal entry by clicking the "Create" button. Each entry\'s state is stored on-chain and can be managed through the program\'s methods, allowing you to create, update, view, and delete your entries securely.'        }
      >
        <p className="mb-6">
          <ExplorerLink path={`account/${programId}`} label={ellipsify(programId.toString())} />
        </p>
        <JournalCreate />
      </AppHero>
      <JournalList />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[32px]">
        <div className="hero-content text-center">
          <WalletButton />
        </div>
      </div>
    </div>
  )
}
