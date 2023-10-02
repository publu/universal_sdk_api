# web3card

A React SDK for querying and displaying universal profiles across platforms.

## Installation

Install the package using npm:

```bash
npm install web3card
```

Or with yarn:

## Usage - Web3Card

Import the Web3Card component in your React project and use it by passing an address prop:

```javascript
import React from 'react';
import Web3Card from 'web3card';

function MyComponent() {
  return (
    <div>
      <Web3Card address="vitalik.eth" />
      {/* You can use any reference like .eth, .lens, .farcaster, or a blockchain address */}
    </div>
  );
}
```
## Usage - API Functions

`web3card` provides the following API functions to fetch profiles from different platforms:

- `fetchUniversalProfile(identity: string)`: This function fetches a universal profile using the provided identity (such as an Ethereum address, ENS name, etc.)

- `fetchENSProfile(identity: string)`: Fetches a profile associated with an Ethereum Name Service (ENS) identity

- `fetchLensProfile(identity: string)`: Retrieves a Lens profile using the provided identity

- `fetchFarcasterProfile(identity: string)`: Fetches a Farcaster profile with the provided identity

- `fetchDotBitProfile(identity: string)`: Retrieves a DotBit profile using the provided identity

Each function returns a Promise that resolves with the data of the fetched profile or `null` if an error occurs during the fetch operation. Errors during the fetch operation are logged to the console.

### Example Usage

Here's how you might use the `fetchENSProfile` function:

```jsx
import { fetchENSProfile } from 'web3card';

async function getProfile() {
  const profile = await fetchENSProfile('vitalik.eth');
  if (profile) {
    console.log(profile);
  } else {
    console.error('Failed to fetch profile');
  }
}

getProfile();
```





## Development

To start the development server:

```bash
npm run start
```
