import fontawesome from '@fortawesome/fontawesome';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faComment from '@fortawesome/fontawesome-free-solid/faComment';



export default () => {
    fontawesome.library.add(
        faEye,
        faThumbsUp,
        faUser,
        faComment
    );
}