import React from 'react';
import { TextContainer, Text1, Employee } from './styles';

export default function CongratName({data}) {
    return (
        <TextContainer>
            {data && 'error' in data && 
                <Text1>{data.error}</Text1>
            }
            {data && 'name' in data &&
                <><Text1>Para</Text1>
                <Employee>{data?.name}</Employee></>
             }
        </TextContainer>
    );
}