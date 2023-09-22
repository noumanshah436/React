import { Stack, Rating, Typography } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3)
  const [stars, setStars] = useState<number | null>(0);
  console.log({ value })
  console.log({ stars })

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue)
  }

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        readOnly

      />



      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={stars}
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
      />

      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={stars}
        size='large'
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
        highlightSelectedOnly

      />
    </Stack>
  )
}
