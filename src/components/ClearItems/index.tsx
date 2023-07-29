import * as C from './styles';
import { AiOutlineClear } from 'react-icons/ai';

type Props = {
    onClear: () => void;
}

export const ClearItems = ({onClear}: Props) => {
    return(
        <C.Container>
            <AiOutlineClear onClick={onClear} />
        </C.Container>
    );
}
