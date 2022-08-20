export const postRequestLinkSubmit = async (mapHash: string) => {
  await fetch(`https://zep.us/play/${mapHash}`)
    .then((response) => response.text())
    .then((html) => {
      // Convert the HTML string into a document object
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const title = doc.getElementsByTagName('title')[0].innerHTML;
      return title || '';
    })
    .catch((error) => {
      // There was an error
      console.warn('Something went wrong.', error);
    })
    .then(async (res) => {
      await fetch(`http://54.164.45.6:8080/api/v1/collect/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mapUrl: `https://zep.us/play/${mapHash}`,
          mapName: res,
        }),
      })
        .then(() => console.log('successfully login'))
        .catch((error) => {
          // There was an error
          console.warn('Something went wrong.', error);
        });
    });
};
