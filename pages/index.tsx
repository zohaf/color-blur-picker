import { useState } from 'react';
import styled from 'styled-components';

const projectColors = { primary: '#db7093', secondary: '#ff3300' };

export default function Home() {
	const [spacingValue, setSpacingValue] = useState(10);
	const [blurValue, setBlurValue] = useState(0);
	const [colorValue, setcolorValue] = useState(`${projectColors.secondary}`);

	const Body = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		margin-top: 28px;
		font-weight: 100;
		font-size: 50px;
	`;

	const Title = styled.h1`
		font-size: 1.5em;
		text-align: center;
		color: ${projectColors.primary};
	`;

	const InnerTitle = styled.span`
		color: ${colorValue};
		padding-left: 4px;
	`;

	const ControllerWrapper = styled.div`
		margin-bottom: 50px;
		display: flex;
		gap: 20px;
		align-items: center;
	`;

	const Controller = styled.div`
		font-size: 18px;
		font-weight: 500;
		color: black;
		display: flex;
		gap: 12px;
		align-items: center;
		background-color: ${projectColors.primary};
		border-radius: 25px;
		padding: 16px;
	`;

	const ImageWrapper = styled.div`
		background-color: ${colorValue};
	`;

	const Image = styled.img`
		min-width: 100%;
		padding: ${spacingValue}px;
		filter: blur(${blurValue}px);
	`;

	const Input = styled.input`
		width: 100px;
	`;

	return (
		<Body>
			<Title>
				pick the right frame and <InnerTitle>color</InnerTitle> for your picture
			</Title>

			<ControllerWrapper>
				<Controller>
					<label htmlFor="spacing">spacing</label>
					<Input
						type="range"
						name="spacing"
						value={spacingValue}
						min="0"
						max="50"
						onChange={e => setSpacingValue(parseInt(e.target.value))}
						data-sizing="px"
					/>
				</Controller>
				<Controller>
					<label htmlFor="blur">blur</label>
					<Input
						type="range"
						name="blur"
						min="0"
						max="5"
						value={blurValue}
						onChange={e => setBlurValue(parseInt(e.target.value))}
						data-sizing="px"
					/>
				</Controller>
				<Controller>
					<label htmlFor="base">base color</label>
					<Input type="color" name="base" value={colorValue} onChange={e => setcolorValue(e.target.value)} />
				</Controller>
			</ControllerWrapper>
			<ImageWrapper>
				<Image title="image" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
			</ImageWrapper>
		</Body>
	);
}
