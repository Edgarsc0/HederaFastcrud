import { TokenAssociateTransaction, TransferTransaction, AccountId, PrivateKey, AccountBalanceQuery, Client } from "@hashgraph/sdk";
import { NextResponse } from "next/server";

export async function POST(request) {

    const { hederaId, hederaPrivate } = await request.json();

    console.log({ hederaId, hederaPrivate });

    const tokenid = process.env.CREATE_TOKEN_ID;
    const ammount = 10;

    const treasuryId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
    const treasuryKey = PrivateKey.fromStringDer(process.env.MY_PRIVATE_KEY);


    const accountId = AccountId.fromString(hederaId);
    const accountKey = PrivateKey.fromStringDer(hederaPrivate);
    const client = Client.forTestnet().setOperator(accountId, accountKey);

    const tokenTransferTx = await new TransferTransaction()
        .addTokenTransfer(tokenid, accountId, -ammount)
        .addTokenTransfer(tokenid, treasuryId, ammount)
        .freezeWith(client)
        .sign(treasuryKey)

    var tokenTransferSubmit = await tokenTransferTx.execute(client);
    var tokenTransferRx = await tokenTransferSubmit.getReceipt(client);

    console.log(`Stablecoin transfer from Treasury to esanchezcat: ${tokenTransferRx.status}`);
    return NextResponse.json({ status: "ok" });
}