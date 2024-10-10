import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';


const CounterItem = [
    {
        id: 1,
        number: 100,
        numberLetter: '+',
        title: 'Soiuri de Pomi Fructiferi',
    },
    {
        id: 2,
        number: 80,
        numberLetter: '+',
        title: 'Soiuri de Trandafiri',
    },
    {
        id: 3,
        number: 40,
        numberLetter: '+',
        title: 'Soiuri de Viță de Vie',
    },
    {
        id: 4,
        number: 10,
        numberLetter: '+',
        title: 'Soiuri de Arbuști Fructiferi',
    }
]

const FactSection = () => {
    return (
        <section className="bd-counter__area fix">
            <div className="container">
                <div className="bd-counter__main theme-bg pt-100 pb-25">
                    <div className="row">
                        <span className="bd-counter-shape-line"></span>
                        {CounterItem.map((item, num) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={num}>
                                <div className="bd-counter__single-item mb-60">
                                    <div className="bd-counter__content">
                                        <span className="counter"><CountUpContent number={item.number} text={item.numberLetter} /></span>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactSection;