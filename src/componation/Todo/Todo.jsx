import "./Todo.css"
import React, { useState } from "react"

const Todo = () => {
  const [inpName, setName] = useState("");
  const [inputWriter, setWriter] = useState("");
  const [inputPrice, setPrice] = useState("");

  const [datapost, setData] = useState([
    { id: 1, bookName: "O`tkan kunlar", writer: "Abdulla Qodiriy", price: 45000 }
  ])

  const check = {
    name: inpName.trim().length === 0,
    price: inputWriter.trim().length === 0,
    author: inputPrice.trim().length === 0,
  }

  const addElemnt = () => {
    if (check.name || check.price || check.author) {
      alert("siz xato kiritdingiz")
    }

    else {
      const item = {
        id: Date.now(),
        isname: inpName,
        author: inputWriter,
        price: inputPrice
      }

      setData([...datapost, item]);
      setWriter("")
      setPrice("")
      setName("")
    }
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="todo">
            <form className="todo_form" action="">
              <input onChange={(e) => setName(e.target.value)} value={inpName} className="todo_input-name" type="text" />

              <input onChange={(e) => setWriter(e.target.value)} value={inputWriter} className="todo_input-writer" type="text" />

              <input onChange={(e) => setPrice(e.target.value)} value={inputPrice} className="todo_input-price" type="text" />

            </form>
            <button className='form_btn rounded' onClick={() => addElemnt()}>ADD</button>
          </div>
          <table className="table table-striped table-hover w-50 mt-5 mx-auto">
            <thead>
              <tr>
                <th>id</th>
                <th>Book name</th>
                <th>Book price</th>
                <th>Control</th>
              </tr>
            </thead>


            <tbody>
              {datapost.map((item, idx) => {

                return <tr key={item.id}>
                  <td>{idx}</td> <td>{item.isname}</td> <td>{item.author}</td><td>{item.price}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>

              }
              )}

            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Todo