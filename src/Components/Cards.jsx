import React from 'react'
function Cards(props){
    return(
        <>
            <div className='cards'>
                <div className='card' style={{height:'430px', width:'320px'}}>
                    <img src={props.imgsrc} style={{height:'280px', width:'320px'}} alt='movieimg' className='card__img' />
                    <div className='card__info' style={{textAlign:'center'}}>
                        <span className='card__category'>{props.title}</span> 
                            <h3 className='card__title'>{props.sname}</h3>
                            <a href={props.links} target="_blank">
                            <button>Watch Now</button>
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards