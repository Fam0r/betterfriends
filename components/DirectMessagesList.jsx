const { React } = require('powercord/webpack');
const {
  getModule,
  getModuleByDisplayName,
  constants: { API_HOST }
} = require('powercord/webpack');
const FriendChannel = require('./FriendChannel');

module.exports = class BetterFriendsDirectMessagesList extends React.Component {
  constructor ({ thisObj }) {
    super();
    this.FAV_FRIENDS = thisObj.FAV_FRIENDS;
  }

<<<<<<< HEAD
  async componentDidMount () {
    this.setState({
      getUser: (await getModule([ 'getUser' ])).getUser,
      getChannel: (await getModule([ 'getChannel' ])).getChannel,
      getDMFromUserId: (await getModule([ 'getDMFromUserId' ])).getDMFromUserId,
      getPrivateChannelIds: (await getModule([ 'getPrivateChannelIds' ])).getPrivateChannelIds,
      VerticalScroller: await getModuleByDisplayName('VerticalScroller'),
      openPrivateChannel: (await getModule([ 'openPrivateChannel' ])).openPrivateChannel,
      transitionTo: (await getModule([ 'transitionTo' ])).transitionTo,
      getRelationships: (await getModule([ 'getRelationships' ])).getRelationships,
      getCurrentUser: (await getModule([ 'getCurrentUser' ])).getCurrentUser,
      getStatus: (await getModule([ 'getStatus' ])).getStatus,
      typingStore: await getModule([ 'getTypingUsers' ])
    });
  }

  createList () {
    const { getUser, getChannel, getDMFromUserId, getPrivateChannelIds } = this.state;
    const PSUEDO_CHANNELS = [
      {
        href: '/activity',
        name: 'Activity',
        avatar: 'M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z'
      },
      {
        href: '/library',
        name: 'Library',
        avatar: 'M17,13.6 L17.3999992,13.6 C19.0406735,13.6 20.496781,12.8097754 21.4084757,11.5891722 L21.8198761,18.8298199 C21.913864,20.4840062 20.6490733,21.9011814 18.994887,21.9951692 C18.9382174,21.9983891 18.8814679,22 18.8247069,22 L5.1752931,22 C3.51843885,22 2.1752931,20.6568542 2.1752931,19 C2.1752931,18.943239 2.17690401,18.8864895 2.18012387,18.8298199 L2.59152425,11.5891732 C3.503219,12.8097758 4.95932613,13.6 6.6,13.6 L7,13.6 L7,15 L9,15 L9,13.6 L15,13.6 L15,15 L17,15 L17,13.6 Z M7,16 L7,18 L9,18 L9,16 L7,16 Z M15,16 L17,16 L17,18 L15,18 L15,16 Z M15,11.6 L9,11.6 L9,9 L7,9 L7,11.6 L6.6,11.6 C4.94314575,11.6 3.6,10.2568542 3.6,8.6 L3.6,5 C3.6,3.34314575 4.94314575,2 6.6,2 L17.3999992,2 C19.0568535,2 20.3999992,3.34314575 20.3999992,5 L20.3999992,8.6 C20.3999992,10.2568542 19.0568535,11.6 17.3999992,11.6 L17,11.6 L17,9 L15,9 L15,11.6 Z'
      },
      {
        href: '/store',
        name: 'Nitro',
        avatar: 'M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z'
      },
      {
        href: '/channels/@me',
        name: 'Friends',
        width: '16',
        height: '16',
        viewBox: '0 0 24 24',
        avatar: { entireElement: <g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g> }
      }
    ];
=======
  render () {
    return (
      <div className='privateChannels-1nO12o'>
        <div className='searchBar-6Kv8R2'>
          <SearchBar query='' style={{ width: '100%' }} />
        </div>
>>>>>>> 0c81db53d4094cb67b1d1132117d61aa5646ecca

    const determineIfSelected = id => [ '/activity', '/library', '/store', '/channels/@me' ].includes(id) ? document.location.href === `https://${API_HOST}${id}` : document.location.href.includes(id);
    const channels = [
      React.createElement('div', { style: { width: '100%',
        height: '20px' } }),
      (PSUEDO_CHANNELS.map(target => {
        target.selected = determineIfSelected(target.href);
        return React.createElement(FriendChannel, { _modules: this.state,
          target });
      })),
      this.FAV_FRIENDS.length
        ? React.createElement('header', { className: 'bf-header-privatechannels',
          children: 'Favorite Friends' })
        : null,
      (this.FAV_FRIENDS.map(user => {
        const target = getUser(user);
        if (!target) {
          return;
        }
        return React.createElement(FriendChannel, { _modules: this.state,
          target,
          selected: determineIfSelected(getDMFromUserId(target.id)) });
      })),
      React.createElement('header', { className: 'bf-header-privatechannels',
        children: 'Direct Messages' }),
      ([ ...new Set(getPrivateChannelIds()) ].map(a => {
        const channel = getChannel(a);
        let target = channel;
        if (channel.type === 1) {
          target = getUser(channel.recipients[0]);
        } else if (channel.type === 3 && !channel.name) {
          target.name = channel.recipients.map(getUser).map(user => user.username).join(', ');
        }

        if (this.FAV_FRIENDS.includes(target.id)) {
          return;
        }
        return React.createElement(FriendChannel, { _modules: this.state,
          target,
          selected: determineIfSelected(channel.id) });
      }))
    ];

    return channels;
  }

  render () {
    if (!this.state) {
      return null;
    }
    const { VerticalScroller } = this.state;
    return (
      <VerticalScroller className='scrollerThemed-2oenus themeGhostHairlineChannels-3G0x9_ scrollerFade-1Ijw5y'>
        {this.createList()}
      </VerticalScroller>
    );
  }
};

