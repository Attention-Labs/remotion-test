import {z} from 'zod'
import {Sequence} from 'remotion'
import {AbsoluteFill} from 'remotion'
import Card from "./Card/card";

export const myCompSchema = z.object({
	titleText: z.string(),
  compose: z.object({
    frame: z.number(),
    fps: z.number()
  })
});

const Screen: React.FC<z.infer<typeof myCompSchema>> = (
  { titleText: propOne, compose: propTwo }
) => {
  return (
    <AbsoluteFill style={{backgroundColor: '#eee'}}>
      <AbsoluteFill>
        <Sequence>
          <Card titleText={propOne} compose={propTwo} />
        </Sequence>
      </AbsoluteFill>
		</AbsoluteFill>
  );
}

export default Screen;
