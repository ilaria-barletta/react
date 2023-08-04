import React from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'harry potter e la pietra filosofale',
        'harry potter e la camera dei segreti',
        'harry potter e il prigioniero di Azkaban'
    ]

    const books =[
        {
            title: 'harry potter e la pietra filosofale',
            year:1997, 
            author: 'J.K.R'
        }, 
        {
            title: 'harry potter e la camera dei segreti',
            year:1998,
            author: 'J.K.R'

        }, 
        {
            title: 'harry potter e il prigioniero di Azkaban',
            year:1999,
            author: 'J.K.R'

        }]
    
    return (
        <div>
            {bookList.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.year}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book book={book}/>
                })
            }
        </div>
    )
}

export default RenderingLists