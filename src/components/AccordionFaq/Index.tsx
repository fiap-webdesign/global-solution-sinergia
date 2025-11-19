import { useState } from "react";
import { items } from "../AccordionItens/Index";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    Accordion,
    AccordionContainer,
    AccordionButton,
    AccordionBody
} from './styles';

function AccordionFaq() {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggle = (id: string) => {
        if (openIds.includes(id)) {
            setOpenIds(openIds.filter(openId => openId !== id));
        } else {
            setOpenIds([...openIds, id]);
        }
    };
    
    const isItemOpen = (id: string) => openIds.includes(id);

    return (
        <Accordion id="faq">
            <AccordionContainer className="container">
                <h2 className="accordion-title">Perguntas Frequentes (FAQ)</h2>

                <div className="accordion">
                    {items.map((item) => (
                        <div key={item.id} className="accordion-item">
                            <h2 className="accordion-header">
                                <AccordionButton
                                    className={`accordion-button ${isItemOpen(item.id) ? "" : "collapsed"}`}
                                    onClick={() => toggle(item.id)}
                                >
                                    {item.title}
                                </AccordionButton>
                            </h2>

                            <div
                                className={`accordion-collapse collapse ${isItemOpen(item.id) ? "show" : ""}`}
                            >
                                <AccordionBody className="accordion-body">
                                    {item.content}
                                </AccordionBody>
                            </div>
                        </div>
                    ))}
                </div>
            </AccordionContainer>
        </Accordion>
    );
}

export default AccordionFaq;