import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import AnalysisTypeForm from './AnalysisTypeForm'

const AnalysisForm = () => {
  return (
    <Box component="form">
      <TextField required id="name" label="Название анализа" size="small" />
      <AnalysisTypeForm />
      <TextField id="sampleId" label="Образец" size="small" />
      <Button>Добавить элемент</Button>
    </Box>
  )
}

export default AnalysisForm
