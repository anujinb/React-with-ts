import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar } from "@material-ui/core";
import { IState as IProps } from '../App'

const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        width: '100%',
        maxWidth: 700,
        border: '1px solid gray',

    },
}))


const PeopleList: React.FC<IProps> = ({ people }) => {
    const classes = useStyles()
    const renderList = () => {
        return people.map((person) => {
            const { url, name, note, age } = person
            return (
                <List component="nav" className={classes.root}>
                    <ListItem style={{ height: 50 }}>
                        <ListItemAvatar><Avatar src={url} /></ListItemAvatar>
                        <ListItemText> {name}</ListItemText>
                        <ListItemText>{age} years old</ListItemText>
                        <ListItemText> {note}</ListItemText>
                    </ListItem>
                </List>
            )
        }
        )
    }

    return (
        <div >{renderList()}</div>
    )
}
export default PeopleList;