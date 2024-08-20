import { TokenAssociateTransaction, TransferTransaction, AccountId, PrivateKey, AccountBalanceQuery, Client } from "@hashgraph/sdk";

export default async function (hederaId, hederaPrivateKey, tokenId) {
    const treasuryId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
    const treasuryKey = PrivateKey.fromStringDer(process.env.MY_PRIVATE_KEY);

    //user account
    const accountId = AccountId.fromString(hederaId);
    const accountKey = PrivateKey.fromStringDer(hederaPrivateKey);
    const client = Client.forTestnet().setOperator(accountId, accountKey);

    const associatedUserTx = await new TokenAssociateTransaction()
        .setAccountId(accountId)
        .setTokenIds([tokenId])
        .freezeWith(client)
        .sign(accountKey)

    const associateUserTxSubmit = await associatedUserTx.execute(client);
    const associateUserRx = await associateUserTxSubmit.getReceipt(client);

    console.log("Token association with user's account with status: ", associateUserRx.status.toString());

    //transaction from treasury account to esanchezcat account
    const tokenTransferTx = await new TransferTransaction()
        .addTokenTransfer(tokenId, treasuryId, -100)
        .addTokenTransfer(tokenId, accountId, 100)
        .freezeWith(client)
        .sign(treasuryKey)

    const tokenTransferSubmit = await tokenTransferTx.execute(client);
    const tokenTransferRx = await tokenTransferSubmit.getReceipt(client);

    console.log(`Stablecoin transfer from Treasury to esanchezcat: ${tokenTransferRx.status}`);

};