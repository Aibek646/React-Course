import React from "react";
import ReactDom from "react-dom";

const books = [
    { title: "War and Peace", author: "Dostoevsky" },
    { title: "harry potter", author: "Joanna Rollings" }
];

function Booklist() {
    return (
        <section>
            {books.map((book) => {
                return <Book {...book} />;
            })}
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    const { title, author } = props;
    const clickHandler = () => {
        alert("hello world");
    };

    const complexExample = (author) => {
        console.log(author);
    };

    return (
        <article>
            <h4 onClick={() => console.log(title)}>{title}</h4>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                reference example
            </button>
            <button type="button" onClick={() => complexExample(author)}>
                more complex example
            </button>
        </article>
    );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
