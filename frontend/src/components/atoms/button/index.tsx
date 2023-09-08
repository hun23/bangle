import { isIP } from 'net';
import * as S from './index.styled';
import Icon from '@src/components/atoms/icon';
import { ButtonProps } from '@src/types/props';

export default function Button({ length, size, content, active = true, icon, onClick }: ButtonProps) {
	return (
		<>
			<S.Button length={length} size={size} active={active} icon={icon} onClick={onClick}>
				{icon && <S.Icon><Icon name={icon} /></S.Icon>}
				{content}
			</S.Button>
		</>
	);
}
