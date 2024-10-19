import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "user app",
    default: "next app",
    template: "%s | client app",
  },
  description: 'User page danh cho user',
};

const User = () => {
  return (
    <div>
      user
      <p>login</p>
    </div>
  )
};

export default User;