import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';
import { CurveMetaPoolCodec } from '../typechain';

dotenv.config();

const setCodec = async () => {
  const [signer] = await ethers.getSigners();
  const codec = await (await ethers.getContract<CurveMetaPoolCodec>('CurveMetaPoolCodec')).connect(signer);
  const tx = await codec.setPoolTokens(
    ['0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA', '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a'],
    [
      [
        '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7'
      ],
      [
        '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7'
      ]
    ]
  );
  await tx.wait();
  console.log('tx', tx.hash);
};

setCodec();
