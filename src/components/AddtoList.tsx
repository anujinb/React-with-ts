import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { IState as Props } from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex', flexDirection: 'column', width: 480,
        margin: '80px auto'

    },
    input: {
        height: 30,
        margin: '4px 0',
        padding: '0px 8px'
    },
    note: {
        height: 100,
        margin: '4px 0',
        padding: '0px 0px 0px 8px',
        textAlign: 'left'

    }
}))

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const classes = useStyles()
    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: ''
    })
    const { name, age, note, img } = input

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value

        }
        )
    }

    const handleClick = (): void => {
        if (
            !name ||
            !age ||
            !img
        ) {
            return
        }
        setPeople([
            ...people,
            {
                name: name,
                age: parseInt(age),
                url: img,
                note: note
            }])
        setInput({
            name: '',
            age: '',
            note: '',
            img: ''
        })
    }

    return (
        <div className={classes.root}>
            <input
                className={classes.input}
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className={classes.input}
                value={age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image URL"
                className={classes.input}
                value={img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Note"
                className={classes.note}
                value={note}
                onChange={handleChange}
                name="note"
            />
            <Button variant="contained" onClick={handleClick} style={{ backgroundColor: '#0276aa', color: '#fff' }}>Add to list</Button>
        </div>
    )
}
export default AddToList;