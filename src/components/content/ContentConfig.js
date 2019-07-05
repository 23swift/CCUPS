import React from 'react'
import Typography from '@material-ui/core/Typography';
import ConfigList from './../common/ConfigList';
import ConfigTestArea from './../common/ConfigTestArea';
import MatchInfo from './../common/MatchInfo';
function createData(sq,fieldName, dataType, size, format, mappToSystem) {
    return {sq, fieldName, dataType, size, format, mappToSystem };
  }
  
  const rows = [
    createData(1,'recordType', 'Numeric', 3, '',  false),
    createData(2,'cardNumber', 'Numeric', 16, '', false),
    createData(3,'name', 'Alpha Numeric', 30, '',false),
    createData(4,'accountNumber', 'Numeric', 10,'', false),
    createData(5,'amount', 'Decimal', 13, '0000000000000.00', false),
  ];
export default function ContentConfig() {
    return (
        <>
            <ConfigList title="Content Configuration" items={rows}/>
            <ConfigTestArea/>
            <MatchInfo/>
        </>
    )
}
