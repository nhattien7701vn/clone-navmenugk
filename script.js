function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await fetch("/appaaa")
        resolve(data.json);

      } catch (error) {
        reject('Failed to fetch data');

      }

    }, 2000);
    
  }
  );
}




function main() {
  fetchData()
  .then(data => {
    console.log("lay thanh cong", data);
  })
  .catch(error => console.error(error));

}

main()

async function displayData() {
  const data = await fetchData();
  const container = document.getElementById('data-container');
  container.innerHTML = JSON.stringify(data);
}
