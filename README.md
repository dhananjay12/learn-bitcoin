## Getting Started

### Download the Wallet

Download the wallet - https://bitcoin.org/en/

### Bitcoin Core Networks

Bitcoin has 3 core networks:
* Mainnet: Primary Network where live transactions take place. Have peers, over 200 GB in size. Block creation time ~10min, coins have real value.
* Testnet: Test environment for applications. Have peers, over 14GB in size, block creation time ~ 10 mins, coins have no real value.
* Regnet: Testing bitcoin applications. No peers, ~0 GB size, block creation time is instantly, dummy coins.


When you start the application, it will start syncing with the mainnet, which requires atleast 200+GB of space. For local development, you actually dont need it. Quit the application. 

### Configuration File

Create a **bitcoin.conf** file in your blockchain data directory. Find where Bitcoin creates its default [data directory](https://en.bitcoin.it/wiki/Data_directory) depending on your OS here.

If nothing is there, it will sync with `mainnet`.

If you put `testnet=1` , it will sync with `testnet`.

If you put `regtest=1` , it will sync with `regnet`.

Launch the app again. you can see the color difference in Logo and see which networks it trying to sync to.

### Get Testnet coins

Create a wallet in the bitcoin core and copy the receiving address. Search for `bitcoin testnet public faucet` and try the results there. 



