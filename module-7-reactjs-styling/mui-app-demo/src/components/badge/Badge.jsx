import React from 'react'
import { Container,Badge } from '@mui/material'
import { Mail } from '@mui/icons-material'
export default function BadgeApp() {
return (
<div>
<Container>
<Badge color="secondary" badgeContent={99}>
<Mail />
</Badge>
<Badge color="secondary" badgeContent={100}>
<Mail />
</Badge>
<Badge color="secondary" badgeContent={1000} max={999}>
<Mail />
</Badge>
</Container>
</div>
)
}
