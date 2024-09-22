import React from "react";

const FAQs = [
  {
    question: "What food will be served?",
    answer:
      "We will have a create your own pasta station which offers spaghetti or fettuccine with alfredo, meat sauce, or marinara, plus toppings like grilled chicken, meatballs, and italian sausage. Plus a side of breadsticks and a salad.",
  },
  {
    question: "Is there wheelchair accessibility?",
    answer: "Yes, the venue is wheelchair accessible.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "You may bring your significant other unless otherwise stated.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold underline text-center">FAQs</h1>
      {FAQs.map((faq) => (
        <div key={faq.question}>
          <h2 className="text-lg font-bold">{faq.question}</h2>
          <p className="pl-4">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
