import { Icon } from '@iconify/react';

import marsai from '../assets/users/marsai.png';
import larryc from '../assets/users/larryc.png';
import shanks from '../assets/users/shanks.png';
import biggy from '../assets/users/biggy.png';
import precious from '../assets/users/precious.png';
import bjamin from '../assets/users/bjamin.png';
import asherkine from '../assets/users/asherkine.png';
import konstance from '../assets/users/konstance.png';
import drizzy from '../assets/users/drizzy.png';
import imole from '../assets/users/imole.png';
import gilmore from '../assets/users/gilmore.png';
import feranmi from '../assets/users/feranmi.png';
import trench from '../assets/users/trench.png';
import mclarry from '../assets/users/mclarry.png';
import Emma from '../assets/users/Emma.jpg';

import biggyvid from '../assets/content/biggyvid.mp4';
import larryvid from '../assets/content/larryvid.mp4';
import marsvid from '../assets/content/marsvid.mp4';
import shankvid from '../assets/content/shankvid.mp4';
import trenchvid from '../assets/content/trenchvid.mp4';

<Icon icon="mi:options-vertical" />;

export const navbar = [
  {
    icon: <Icon icon="jam:home-f" />,
    label: 'Home',
    active: true,
    href: '#',
  },
  {
    icon: <Icon icon="hugeicons:search-01" />,
    label: 'Search',
    href: '#',
  },
  {
    icon: <Icon icon="fa6-regular:compass" />,
    label: 'Explore',
    href: '#',
  },
  {
    icon: <Icon icon="mage:video-player-fill" />,
    label: 'Reels',
    href: '#',
  },
  {
    icon: <Icon icon="basil:facebook-messenger-outline" />,
    label: 'Messages',
    href: '#',
  },
  {
    icon: <Icon icon="fa6-regular:heart" />,
    label: 'Notifications',
    href: '#',
  },
  {
    icon: <Icon icon="solar:add-square-linear" />,
    label: 'Create',
    href: '#',
  },
  {
    icon: <Icon icon="mi:bar-chart" height="25px" width="25px" />,
    label: 'Dashboard',
    href: '#',
  },
  {
    img: Emma,
    label: 'Profile',
    href: '#',
  },
  {
    icon: <Icon icon="fa6-regular:circle" />,
    label: 'Meta AI',
    href: '#',
  },
  {
    icon: <Icon icon="hugeicons:dashboard-square-add" />,
    label: 'AI Studio',
    href: '#',
  },
  {
    icon: <Icon icon="fa6-brands:threads" />,
    label: 'Threads',
    href: '#',
  },
  {
    icon: <Icon icon="material-symbols:menu-rounded" />,
    label: 'More',
    href: '#',
  },
];

export const mobNav = [
  { icon: <Icon icon="jam:home-f" /> },
  { icon: <Icon icon="fa6-regular:compass" /> },
  { icon: <Icon icon="mage:video-player-fill" /> },
  { icon: <Icon icon="solar:add-square-linear" /> },
  { icon: <Icon icon="basil:facebook-messenger-outline" /> },
  { icon: <Icon icon="mi:bar-chart" height="25px" width="25px" /> },
  { img: Emma },
];

export const mobLogo = [
  { icon: <Icon icon="fa6-regular:heart" /> },
  {
    icon: (
      <Icon
        icon="basil:facebook-messenger-outline"
        height="25px"
        width="25px"
      />
    ),
  },
];

export const stories = [
  { img: marsai, username: 'marsaimar...' },
  { img: larryc, username: 'larrychann...' },
  { img: shanks, username: 'shankcomi...' },
  { img: precious, username: 'mostprec...' },
  { img: bjamin, username: 'bjamin' },
  { img: biggy, username: 'biggy1804' },
  { img: asherkine, username: 'asherkine' },
  { img: konstance, username: 'konsta...' },
  { img: drizzy, username: 'icondri...' },
  { img: imole, username: 'imoleayo' },
  { img: feranmi, username: 'feranmi' },
  { img: gilmore, username: 'gilmore' },
  { img: trench, username: 'thetrench...' },
  { img: mclarry, username: 'mclarry...' },
];

export const suggestedUsers = [
  {
    img: gilmore,
    username: 'yxngb_y_e.o1',
    subtitle: 'Followed by themasterpaul + ...',
  },
  {
    img: Emma,
    username: 'instagram',
    subtitle: 'Followed by queen_ofwealth + ...',
    verified: true,
  },
  {
    img: feranmi,
    username: 'yabaleftonline',
    subtitle: 'Followed by goodness_iyanam + ...',
  },
  { img: trench, username: 'dulox__', subtitle: 'Suggested for you' },
  { img: mclarry, username: 'bi_bah07', subtitle: 'Followed by thatgirl_aj' },
];

export const feedPost = [
  {
    img: larryc,
    username: 'larrychannels',
    time: '32m',
    audio: 'Original audio',
    caption: 'Can you just imagine 😳?',
    likes: 1147,
    commentsCount: 30,
    video: larryvid,
    icon: <Icon icon="mi:options-horizontal" />,
  },
  {
    img: marsai,
    username: 'marsaimartin',
    time: 'April 15',
    audio: 'Original audio',
    caption: 'press run = mission accomplished ✔️',
    likes: '538k',
    commentsCount: 3048,
    video: marsvid,
    icon: <Icon icon="mi:options-horizontal" />,
  },
  {
    img: biggy,
    username: 'biggy1804',
    time: '1d',
    audio: 'Original audio',
    caption: 'see Y’all Tomorrow...',
    likes: 334,
    commentsCount: 8,
    video: biggyvid,
    icon: <Icon icon="mi:options-horizontal" />,
  },
  {
    img: shanks,
    username: 'shankcomics',
    time: 'Feb 14',
    audio: 'Original audio',
    caption: 'This girl burst my head😂😂😂.',
    likes: '802k',
    commentsCount: 4126,
    video: shankvid,
    icon: <Icon icon="mi:options-horizontal" />,
  },
  {
    img: trench,
    username: 'thetrenchboy',
    time: '4d',
    audio: 'Original audio',
    caption: 'New Episode Alert! ⏰',
    likes: '4,541',
    commentsCount: 22,
    video: trenchvid,
    icon: <Icon icon="mi:options-horizontal" />,
  },
];
