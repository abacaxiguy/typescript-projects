type VotingOption = {
    votingNumber: number;
    option: string;
};

export class Voting {
    private _votingOptions: VotingOption[] = [];
    constructor(public details: string) {}

    addVotingOption(votingOption: VotingOption): void {
        this._votingOptions.push(votingOption);
    }

    vote(votingIndex: number): void {
        if (!this._votingOptions[votingIndex]) return;
        this._votingOptions[votingIndex].votingNumber += 1;
    }

    get votingOptions(): VotingOption[] {
        return this._votingOptions;
    }
}

export class VotingApp {
    private votings: Voting[] = [];

    addVoting(voting: Voting): void {
        this.votings.push(voting);
    }

    showVotings(): void {
        for (const voting of this.votings) {
            console.log(voting.details);
            for (const votingOption of voting.votingOptions) {
                console.log(votingOption.option, votingOption.votingNumber);
            }
        }
        console.log("###\n");
    }
}

const voting1 = new Voting("What's your favorite idea?");
voting1.addVotingOption({ option: "idk", votingNumber: 0 });
voting1.addVotingOption({ option: "Being creative", votingNumber: 0 });
voting1.addVotingOption({ option: "🐵🥁", votingNumber: 0 });

voting1.vote(1);
voting1.vote(1);
voting1.vote(1);
voting1.vote(1);
voting1.vote(1);
voting1.vote(0);
voting1.vote(2);

const votingApp = new VotingApp();
votingApp.addVoting(voting1);

votingApp.showVotings();
