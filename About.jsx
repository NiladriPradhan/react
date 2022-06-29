// import React from 'react'

// const About = () => {
//     return (
//         <>
//         <h1> ABOUT PAGE </h1>
//         </>
//     );
// };
// export default About;

import React from 'react'

const About = (props) => {
    return (
        <>
        <div className='about'>
            <h1 id='about'>  {props.name} </h1>
            <p>Wellcome to my world</p>
        </div>
        <br />

        </>
    );
}
export default About;
