(() => {
  const requiredClicks = 5

  const useEasterEggAvatar = () => {
    document.querySelectorAll('.avatar-img img').forEach(avatar => {
      // Preserve the site's base path (for example, GitHub Pages /blogs/).
      avatar.src = avatar.src.replace('myprofile.png', 'profile.png')
      avatar.dataset.avatarEasterEgg = 'true'
    })
  }

  // A direct link makes the easter egg shareable: ?avatar=easter-egg
  if (new URLSearchParams(window.location.search).get('avatar') === 'easter-egg') {
    useEasterEggAvatar()
    return
  }

  let clicks = 0
  document.addEventListener('click', event => {
    if (!event.target.matches('.avatar-img img')) return

    clicks += 1
    if (clicks === requiredClicks) useEasterEggAvatar()
  })
})()
