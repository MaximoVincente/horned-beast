
import React from 'react';
import HornedBeast from './HornedBeast.js';
import rhino from './rhino.jpg';
import highland from './highland-cow.jpg'


class Main extends React.Component {
    render() {
        return (
            <>
                <div>
                    <HornedBeast src={rhino} alt={'Rhino Image'} title= {'Rhino'}
                    description= {'The name rhinoceros is greek for rhino (nose), and ceros(horn).'}/>
                </div>
                <div>
                    <HornedBeast src={highland} alt={'Highland Cow'} title={'Highland Cow'}
                    description= {'Say hello to the oldest cattle breed in the world!'}/>
                </div>
            </>
        )
    }
}

export default Main;