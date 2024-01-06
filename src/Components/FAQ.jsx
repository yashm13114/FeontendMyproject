import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
const FAQ = ({ faqData }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className=" max-w-5xl py-3 mx-auto mt-2 tracking-wide md:px-4 md:mt-10 lg:p-0 md:p-0 p-6">
                <div className="flex justify-center text-3xl">Frequently Asked Questions</div>

                <div className="grid gap-3 py-8 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                        <AccordionItem title="How do I add a new expense??" content="You can simply go to Add expense where you can add expenses or income and also types of expesnes" />
                        <AccordionItem title="Is it possible to edit or delete an expense entry??" content="Yes, you can go to Manage Expense where you can edit or delete." />
                    </div>

                    <div className="space-y-3">
                        <AccordionItem title="What time periods can I view expenses for?" content="You cane see expenses of last 7 days, last 30 days and this year expense" />
                        <AccordionItem title="Can I use the expense tracker on multiple devices?" content="Yes" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
