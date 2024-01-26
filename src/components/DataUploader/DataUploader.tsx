import { Button } from "../Button";

export const DataUploader = () => {
    return (
        <>
            <Button text="Upload" colorVariant="secondary" reaction={() => console.log('Custom handle')} />
        </>
    );
};
