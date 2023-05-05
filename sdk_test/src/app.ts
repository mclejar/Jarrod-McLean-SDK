import LotrSDK from '@mclejar/lotr_sdk';

const client = new LotrSDK({
    apiKey: "<MyAccessToken>",
});

client.getMovies().then((p) => {
    console.log(p);
});