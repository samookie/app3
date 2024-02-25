import {Button} from 'react-native-paper';
import {useState} from 'react';

const LikeButton = ({ onLike,drink }) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
        onLike(!liked, drink);
    };

    return(
      <Button 
        title={ liked ? "Liked" : "Like"}
        onPress={handleLike}
        textColor={liked ? "red" : "blue"}
      > 
      {liked ? "Liked" : "Like"}
      </Button>
    );

};

  export default LikeButton;