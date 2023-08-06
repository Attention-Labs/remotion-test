import "./global.css"
import {Composition} from 'remotion';
import Screen from './Screen';
import { useState } from "react";

export const RemotionRoot: React.FC = () => {
	const [currentFps, setCurrentFps] = useState(30);

	return (
		<>
			<Composition
			 	id="ScreenCard"
				component={Screen}
				durationInFrames={150}
				fps={currentFps}
				width={680}
				height={1200}
				defaultProps={{
					titleText: 'Lorem ipsum dolor sit amet, adipiscing elit. Aliquam accumsan molestie pharetra.',
					compose: {frame: 86, fps: currentFps}
				}}
			/>
		</>
	);
};
