import { createTheme, ThemeProvider, colors } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab'
import './App.css'

import { MuiTypography } from './components/MuiTypography'
// import { MuiButton } from './components/2-MuiButton'
// import { MuiTextField } from './components/7-MuiTextField'
// import { MuiSelect } from './components/8-MuiSelect'
// import { MuiRadioButton } from './components/9-MuiRadioButton'
// import { MuiCheckbox } from './components/10-MuiCheckbox'
// import { MuiSwitch } from './components/11-MuiSwitch'
// import { MuiRating } from './components/12-MuiRating'
// import { MuiAutocomplete } from './components/13-MuiAutocomplete'
// import { MuiLayout } from './components/14-MuiLayout'
// import { MuiCard } from './components/15-MuiCard'
// import { MuiAccordion } from './components/16-MuiAccordion'
// import { MuiImageList } from './components/17-MuiImageList'
// import { MuiNavbar } from './components/18-MuiNavbar'
// import { MuiLink } from './components/19-MuiLink'
// import { MuiBreadcrumbs } from './components/20-MuiBreadcrumbs'
// import { MuiDrawer } from './components/21-MuiDrawer'
// import { MuiTabs } from './components/22-MuiTabs'
// import { MuiSpeedDial } from './components/23-MuiSpeedDial'
// import { MuiBottomNavigation } from './components/24-MuiBottomNavigation'
// import { MuiAvatar } from './components/25-MuiAvatar'
// import { MuiBadge } from './components/26-MuiBadge'
// import { MuiList } from './components/27-MuiList'
// import { MuiChip } from './components/28-MuiChip'
// import { MuiTooltip } from './components/29-MuiTooltip'
// import { MuiTable } from './components/30-MuiTable'
import { MuiAlert } from './components/31-MuiAlert'
// import { MuiSnackbar } from './components/32-MuiSnackbar'
// import { MuiDialog } from './components/33-MuiDialog'
// import { MuiSkeleton } from './components/34-MuiSkeleton'
// import { MuiProgress } from './components/35-MuiProgress'
// import { MuiLoadingButton } from './components/36-MuiLoadingButton'
// import { MuiDateTimePicker } from './components/37-MuiDateTimePicker'
// import { MuiDateRangePicker } from './components/38-MuiDateRangePicker'
// import { MuiTimeline } from './components/MuiTimeline'
// import { MuiMasonry } from './components/39-MuiMasonry'
// import { MuiCustomTheme } from './components/MuiCustomTheme'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          <MuiTypography />
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiTabs /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          <MuiAlert />
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiProgress /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiCustomTheme /> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
