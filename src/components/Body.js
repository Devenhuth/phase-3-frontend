import React from "react";
import SinglePenguin from "./SinglePenguin";

function Body({penguinNest, handleDeletePenguin, handleUpdatePenguin}) {


    const penguin1 = penguinNest.filter(penguin => penguin.breed_id === 1)
    const penguinArr1 = penguin1.map((data) => {
        return ( <SinglePenguin name={data.name} age={data.age} key={data.id} handleDeletePenguin={handleDeletePenguin} id={data.id} handleUpdatePenguin={handleUpdatePenguin} picture={data.picture} />)
    })

    const penguin2 = penguinNest.filter(penguin => penguin.breed_id === 2)
    const penguinArr2 = penguin2.map((data) => {
        return ( <SinglePenguin name={data.name} age={data.age} key={data.id} handleDeletePenguin={handleDeletePenguin} id={data.id} handleUpdatePenguin={handleUpdatePenguin} picture={data.picture} />)
    })

    const penguin3 = penguinNest.filter(penguin => penguin.breed_id === 3)
    const penguinArr3 = penguin3.map((data) => {
        return ( <SinglePenguin name={data.name} age={data.age} key={data.id} handleDeletePenguin={handleDeletePenguin} id={data.id} handleUpdatePenguin={handleUpdatePenguin} picture={data.picture} />)
    })

    const penguin4 = penguinNest.filter(penguin => penguin.breed_id === 4)
    const penguinArr4 = penguin4.map((data) => {
        return ( <SinglePenguin name={data.name} age={data.age} key={data.id} handleDeletePenguin={handleDeletePenguin} id={data.id} handleUpdatePenguin={handleUpdatePenguin} picture={data.picture} />)
    })

    const penguin5 = penguinNest.filter(penguin => penguin.breed_id === 5)
    const penguinArr5 = penguin5.map((data) => {
        return ( <SinglePenguin name={data.name} age={data.age} key={data.id} handleDeletePenguin={handleDeletePenguin} id={data.id} handleUpdatePenguin={handleUpdatePenguin} picture={data.picture} />)
    })
    
    return(
        <div>
            <div>
                <h1 className="penguinBreed">1. Emperor Penguins:</h1>
                <ul className="penguinGrid">{penguinArr1}</ul>
            </div>
            <div>
                <h1 className="penguinBreed">2. Chinstrap Penguins:</h1>
                <ul className="penguinGrid">{penguinArr2}</ul>
            </div>
            <div>
                <h1 className="penguinBreed">3. Gentoo Penguins:</h1>
                <ul className="penguinGrid">{penguinArr3}</ul>
            </div>
            <div>
                <h1 className="penguinBreed">4. King Penguins:</h1>
                <ul className="penguinGrid">{penguinArr4}</ul>
            </div>
            <div>
                <h1 className="penguinBreed">5. Rockhopper Penguins:</h1>
                <ul className="penguinGrid">{penguinArr5}</ul>
            </div>
        </div>
    )
}

export default Body;