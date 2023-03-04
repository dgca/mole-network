# Mole Network

A decentalized, chain-to-chain oracle data solution.

## Problem statement

When building a decentralized protocol, we often require data that isn't available on-chain. There are a number of Oracle solutions that provide access to web2 API data, or meatspace data such as the weather; but one type of data that is underserved by current tools is data that can be derived from things that happen on-chain.

Though we like to say that on-chain data can be freely used by any contract, this is not always true. For example, event data is inaccessible from contracts, reading private contract values can be difficult, and processing data from multiple contracts to get to the value we need can get very expensive if done through a smart contract transaction.

## Solution

We're building Mole Network, a system that lets smart contract developers define the data get the data they need from on-chain events and transactions.

In a nutshell, Mole Network brings pairs people who want data, and people who want to report data for a small fee.

The system has three primary parts:

**Users**

Users are the people who need some arbitrary data made available on-chain. Users specify the data sources they need, how they want the data processed, and where they want the data reported

**Reporters**

Reporters are the people who want to offer their proecssing power and collect fees in return. Reporters run the Mole Network CLI which tells them what data users have asked for, and it listens to an EVM RPC node to capture those events and write the results to a destination.

**Destinations**

Destinations are where the results are written. This could be existing decentralized oracle protocols, or a specific smart contract that the user has specified.

## Future State

The above describes a solution for a common problem smart contract developers face today, but the Mole Network system is flexible enough to expand to other use cases as well.

For instance, by defining how a user could ask for the result of a web2 API endpoint, we can combine on-chain and off-chain data, process it, and make it available back on-chain.

Also, since Mole Network works on any EVM chain, it can act as a data bridge between blockchains. I.e. user can ask that events be captured from multiple chains, processed, and have the data written back to one single chain.

---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve mole-site` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.