import React from 'react';
import { TextContainer, Text1, Employee } from './styles';

export default function CongratName({data}) {
    return (
        <TextContainer>
            <Text1>Para</Text1>
            <Employee>{data?.name}</Employee>
        </TextContainer>
    );
}