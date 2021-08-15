import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import './Display.css';



function Display(props) {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const name =  props.userInput ||  'devidascs07';
        fetch('https://api.github.com/users/' + name)
            .then((response) => response.json())
            .then((data) => {
                data.message ? setError(data.message) : setData(data);
            })
    }, [props.userInput]);

    const setData = ({ name, login, followers, following, public_repos, avatar_url }) => {
        setError(null);
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    };

    return (
        <section>
            {error ? (<h1> {error}</h1 >) : (
                <section className="display">
                    <Card className="card" variant="outlined">
                        <CardActionArea>
                            <Avatar alt="image" style={{width:'250px', height:'250px'}} src={avatar} />
                            <Typography gutterBottom variant="h5" component="h2">
                                  <i>{name}</i>  
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userName}
                                </Typography>
                            <CardContent style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                
                                <Typography style={{ color: '#081352', fontSize: '20px' }} variant="body2" color="textSecondary" component="p">
                                   
                                    <GroupIcon /> <b> {followers} </b>Followers<br />
                                    <CodeIcon /><b> {repos} </b>Repos <br />
                                   <PeopleOutlineIcon/><b> {following} </b>Following <br />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
                            <Button variant="contained" color="primary"> Like </Button>
                        </CardActions>
                    </Card>
                </section>
            ) }
        </section>
    );
}
                    
  export default Display;