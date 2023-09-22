import { Stack, Avatar, AvatarGroup } from '@mui/material'
export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>

      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      </Stack>

      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
          <Avatar
            src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='John Doe'
          />
          <Avatar   sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        </AvatarGroup>
      </Stack>

      <Stack direction='row' spacing={1}>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  )
}
