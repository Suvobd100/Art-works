const spinner = document.getElementById('spinner-id');

const artsData = async()=>{
    try{
    const response = await fetch('https://api.artic.edu/api/v1/artworks');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayAllArts(data.data.slice(0,6));
    }
    catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        spinner.classList.add('hidden'); // Hide spinner after fetching
    }
    
    // console.log(data.data);

}

const displayAllArts = (dataAll)=>{
   
    console.log('Display:',dataAll);

}


const handleShowAll = ()=>{
    // alert("handel show all clicked");
}


const heandleSearch = () =>{
    spinner.classList.remove('hidden')
    // alert('heandle Search')


    setTimeout(() => {
        artsData();
        
    }, 3000);
}

// artsData();

