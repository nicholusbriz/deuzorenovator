// ======================
// Mobile Navigation Toggle
// ======================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ======================
// Scroll Progress
// ======================
window.addEventListener('scroll', () => {
  const winHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset;
  const trackLength = docHeight - winHeight;
  const progress = Math.floor((scrollTop / trackLength) * 100);
  
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
});

// ======================
// TRACKS (your list)
// ======================
const tracks = [
  { name: 'Gumpe', year: '2016', type: 'Debut Single', filename: 'Gumpe.mp3' },
  { name: 'Mataala', year: '2017', type: 'Breakout Hit', filename: 'mataala.mp3' },
  //{ name: 'OK Hows Gala', year: '2018', type: 'Single', filename: 'ok-hows-gala.mp3' },
  //{ name: 'Born A Winner', year: '2018', type: 'Single', filename: 'born-a-winner.mp3' },
 // { name: 'Mukyidongo', year: '2018', type: 'Single', filename: 'mukyidongo.mp3' },
  //{ name: 'Make Me Know', year: '2018', type: 'Single', filename: 'make-me-know.mp3' },
 // { name: 'Cation You', year: '2018', type: 'Single', filename: 'cation-you.mp3' },
 // { name: 'Onanagiza Nana', year: '2019', type: 'Emotional Ballad', filename: 'onanagiza-nana.mp3' },
  //{ name: 'Miss Yo Love', year: '2019', type: 'International Hit', filename: 'miss-yo-love.mp3' },
  { name: 'Sweet Love', year: '2023', type: 'Romantic Anthem', filename: 'sweet-love.mp3' },
 // { name: 'Kikahandiikwa', year: '2023', type: 'Dancehall Banger', filename: 'kikahandiikwa.mp3' },
  //{ name: 'Kokasemera', year: '2023', type: 'ft. Shasha bei African', filename: 'kokasemera.mp3' },
  //{ name: 'Ku MAZZI', year: '2024', type: 'ft. Webby Snr & Precocious', filename: 'ku-mazzi.mp3' },
  { name: 'Totally', year: '2024', type: 'HD Video', filename: 'totally.mp3' },
  { name: 'EBIDONGO', year: '2025', type: 'Latest Release', filename: 'ebidongo.mp3' },
  { name: 'EASY', year: '2025', type: 'Official Video', filename: 'easy.mp3' },
  { name: 'Loving A Bad Man', year: '2023', type: 'Single', filename: 'loving-a-bad-man.mp3' },
 // { name: 'Zika', year: '2023', type: 'Single', filename: 'zika.mp3' },
 // { name: 'Semera', year: '2023', type: 'Single', filename: 'semera.mp3' },
 // { name: 'Rugaho', year: '2023', type: 'Single', filename: 'rugaho.mp3' },
  { name: 'Na Na Na', year: '2023', type: 'Single', filename: 'Nanana.mp3' },
  //{ name: 'Karugaho', year: '2023', type: 'Single', filename: 'karugaho.mp3' },
  //{ name: 'Zikanduka', year: '2023', type: 'Single', filename: 'zikanduka.mp3' },
  //{ name: 'Ugaho', year: '2023', type: 'Single', filename: 'ugaho.mp3' },
  //{ name: 'Kutemwa', year: '2023', type: 'Single', filename: 'kutemwa.mp3' }
];

// ======================
// VIDEOS (your list)
// ======================
const videos = [
  { title: 'EBIDONGO', year: '2025', type: 'Latest Release', filename: 'ebidongo.mp4' },
  { title: 'EASY', year: '2025', type: 'Official Video', filename: 'easy.mp4' },
  { title: 'Totally', year: '2024', type: 'HD Video', filename: 'totally.mp4' },
  { title: 'Gumpe', year: '2024', type: 'HD Video', filename: 'Gumpe.mp4' },
  { title: 'Loving-a-Bad-Man', year: '2024', type: 'HD Video', filename: 'Loving-a-Bad-Man.mp4' },
  { title: 'Nanana', year: '2024', type: 'ft. Webby Snr & Precocious', filename: 'Nanana.mp4' },
  { title: 'Okukwagala', year: '2023', type: 'ft. Shasha bei African', filename: 'Okukwagala.mp4' },
  { title: 'Sweet Love', year: '2023', type: 'Romantic Anthem', filename: 'sweet-love.mp4' },
  { title: 'Zikarugaho', year: '2023', type: 'Dancehall Banger', filename: 'Zikarugaho.mp4' },
  { title: 'Miss Yo Love', year: '2019', type: 'International Hit', filename: 'miss-yo-love.mp4' },
  { title: 'Mataala', year: '2017', type: 'Breakout Hit', filename: 'mataala.mp4' }
];

// ======================
// INIT
// ======================
document.addEventListener('DOMContentLoaded', () => {
  audioPlayer.init();
  populateMusicGrid();
  populateVideoGrid();
  autoLoadFirstVideo();
  initImageErrorHandling();

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'rgba(255,255,255,0.98)';
    } else {
      navbar.style.backgroundColor = 'rgba(255,255,255,0.98)';
    }
  });

  // Dark mode toggle
  const darkModeBtn = document.getElementById('darkModeToggle');
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkModeBtn.innerHTML = document.body.classList.contains('dark')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      trackEvent('Contact', 'Form Submission', 'Contact Form');
      alert('Thank you for your message! Deuzo will get back to you soon.');
      contactForm.reset();
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
});

// ======================
// Image Error Handling
// ======================
function initImageErrorHandling() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.onerror = function() {
      this.src = 'https://picsum.photos/seed/deuzo/400/600';
      console.warn('Image failed to load:', this.alt);
    };
  });
}

// ======================
// Analytics & Tracking
// ======================
function trackEvent(category, action, label) {
  console.log('Event Tracked:', category, action, label);
  // Add Google Analytics or other tracking here
  // gtag('event', action, {
  //   'event_category': category,
  //   'event_label': label
  // });
}

// ======================
// Keyboard Shortcuts
// ======================
function handleKeyboardShortcuts(e) {
  // Ignore if user is typing in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  switch(e.code) {
    case 'Space':
      e.preventDefault();
      audioPlayer.togglePlay();
      trackEvent('Keyboard', 'Play/Pause', 'Spacebar');
      break;
    case 'ArrowRight':
      audioPlayer.nextTrack();
      trackEvent('Keyboard', 'Next Track', 'Arrow Right');
      break;
    case 'ArrowLeft':
      audioPlayer.previousTrack();
      trackEvent('Keyboard', 'Previous Track', 'Arrow Left');
      break;
  }
}

// ======================
// Populate Music Grid
// ======================
function populateMusicGrid() {
  const musicGrid = document.getElementById('musicGrid');
  musicGrid.innerHTML = '';
  
  tracks.forEach((track, index) => {
    const trackCard = document.createElement('div');
    trackCard.className = 'track-card';
    trackCard.setAttribute('data-index', index);
    trackCard.onclick = () => {
      playTrack(track, index);
      trackEvent('Music', 'Play Track', track.name);
    };
    
    trackCard.innerHTML = `
      <div class="track-icon"><i class="fas fa-music"></i></div>
      <h4>${track.name}</h4>
      <p>${track.year} • ${track.type}</p>
    `;
    musicGrid.appendChild(trackCard);
  });
}

// ======================
// Populate Video Grid
// ======================
function populateVideoGrid() {
  const videoGrid = document.getElementById('videoGrid');
  videoGrid.innerHTML = '';
  
  videos.forEach((video, index) => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.setAttribute('data-video-index', index);
    if (index === 0) videoCard.classList.add('active');
    
    videoCard.onclick = () => {
      playVideo(video, index);
      trackEvent('Video', 'Play Video', video.title);
    };
    
    const imageId = 1000 + index;
    videoCard.innerHTML = `
      <div class="video-thumbnail">
        <img src="https://picsum.photos/seed/${imageId}/400/250" alt="${video.title}" loading="lazy">
        <i class="fas fa-play"></i>
      </div>
      <h4>${video.title}</h4>
      <p>${video.year} • ${video.type}</p>
    `;
    videoGrid.appendChild(videoCard);
  });
}

// ======================
// Audio Player
// ======================
const audioPlayer = {
  currentTrack: null,
  currentTrackIndex: -1,
  isPlaying: false,
  audio: new Audio(),
  progress: document.getElementById('progress'),
  currentTimeEl: document.getElementById('currentTime'),
  durationEl: document.getElementById('duration'),
  volumeControl: document.getElementById('volume'),
  currentTrackEl: document.getElementById('currentTrack'),
  playBtn: document.getElementById('playBtn'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  progressBar: document.getElementById('progressBar'),
  audioLoading: document.getElementById('audioLoading'),

  init() {
    this.playBtn.addEventListener('click', () => this.togglePlay());
    this.prevBtn.addEventListener('click', () => this.previousTrack());
    this.nextBtn.addEventListener('click', () => this.nextTrack());
    this.volumeControl.addEventListener('input', () => this.setVolume());

    this.progressBar.addEventListener('click', e => {
      if (!this.audio.duration) return;
      const clickPos = (e.pageX - this.progressBar.getBoundingClientRect().left) / this.progressBar.offsetWidth;
      this.audio.currentTime = clickPos * this.audio.duration;
    });

    // Audio event listeners
    this.audio.addEventListener('loadstart', () => this.showLoading());
    this.audio.addEventListener('loadedmetadata', () => {
      this.durationEl.textContent = this.formatTime(this.audio.duration);
      this.hideLoading();
    });
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.nextTrack());
    this.audio.addEventListener('error', (e) => this.handleAudioError(e));

    this.setVolume();
  },

  showLoading() {
    if (this.audioLoading) {
      this.audioLoading.style.display = 'block';
      this.playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }
  },

  hideLoading() {
    if (this.audioLoading) {
      this.audioLoading.style.display = 'none';
    }
  },

  handleAudioError(e) {
    console.error('Audio error:', e);
    this.hideLoading();
    if (this.currentTrack) {
      alert(`Error loading audio: ${this.currentTrack.name}. The file may be missing or corrupted.`);
    }
    this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    this.isPlaying = false;
  },

  playTrack(track, index) {
    // Show loading state
    this.showLoading();

    // Stop video if playing
    const videoEl = document.getElementById('mainVideo');
    if (videoEl && !videoEl.paused) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }

    // Update UI
    document.querySelectorAll('.track-card').forEach(card => card.classList.remove('active'));
    const trackCard = document.querySelector(`.track-card[data-index="${index}"]`);
    if (trackCard) trackCard.classList.add('active');

    this.currentTrack = track;
    this.currentTrackIndex = index;
    this.currentTrackEl.textContent = `${track.name} (${track.year})`;

    // Load and play audio
    this.audio.src = `audio/${track.filename}`;
    this.audio.currentTime = 0;
    
    this.play().catch(e => {
      console.error('Play failed:', e);
      this.handleAudioError(e);
    });

    // Track event
    trackEvent('Audio', 'Play Track', track.name);
  },

  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
  },

  async play() {
    if (!this.currentTrack) {
      this.playTrack(tracks[0], 0);
      return;
    }

    try {
      this.isPlaying = true;
      this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      await this.audio.play();

      // Update mini player
      document.getElementById('miniTrack').textContent = `${this.currentTrack.name} (${this.currentTrack.year})`;
      document.getElementById('miniPlayBtn').innerHTML = '<i class="fas fa-pause"></i>';
      
      trackEvent('Audio', 'Play', this.currentTrack.name);
    } catch (error) {
      console.error('Play error:', error);
      this.isPlaying = false;
      this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  },

  pause() {
    this.isPlaying = false;
    this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    this.audio.pause();

    // Update mini player
    document.getElementById('miniPlayBtn').innerHTML = '<i class="fas fa-play"></i>';
    
    trackEvent('Audio', 'Pause', this.currentTrack?.name);
  },

  previousTrack() {
    const prev = this.currentTrackIndex > 0 ? this.currentTrackIndex - 1 : tracks.length - 1;
    this.playTrack(tracks[prev], prev);
  },

  nextTrack() {
    const next = this.currentTrackIndex < tracks.length - 1 ? this.currentTrackIndex + 1 : 0;
    this.playTrack(tracks[next], next);
  },

  setVolume() {
    this.audio.volume = this.volumeControl.value / 100;
  },

  updateProgress() {
    if (this.audio.duration) {
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      this.progress.style.width = `${percent}%`;
      this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
  },

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
};

function playTrack(track, index) {
  audioPlayer.playTrack(track, index);
}

// ======================
// Video Player
// ======================
function playVideo(video, index) {
  const videoPlayer = document.getElementById('mainVideo');
  const videoTitle = document.getElementById('currentVideoTitle');
  const videoDesc = document.getElementById('currentVideoDesc');
  const videoLoading = document.getElementById('videoLoading');

  // Show loading
  if (videoLoading) videoLoading.style.display = 'block';

  // Stop audio if playing
  if (audioPlayer.audio && !audioPlayer.audio.paused) {
    audioPlayer.pause();
    audioPlayer.audio.currentTime = 0;
  }

  // Update UI
  document.querySelectorAll('.video-card').forEach(card => card.classList.remove('active'));
  const videoCard = document.querySelector(`.video-card[data-video-index="${index}"]`);
  if (videoCard) videoCard.classList.add('active');

  // Set video source and metadata
  videoPlayer.src = `videos/${video.filename}`;
  videoTitle.textContent = video.title;
  videoDesc.textContent = `${video.year} • ${video.type}`;

  // Error handling
  videoPlayer.onerror = () => {
    console.error('Error loading video:', video.filename);
    if (videoLoading) videoLoading.style.display = 'none';
    alert(`Error loading video: ${video.title}. The file may be missing or corrupted.`);
  };

  videoPlayer.onloadeddata = () => {
    if (videoLoading) videoLoading.style.display = 'none';
  };

  // Play video
  videoPlayer.play().catch(e => {
    console.warn('Video play error:', e);
    if (videoLoading) videoLoading.style.display = 'none';
  });

  trackEvent('Video', 'Play Video', video.title);
}

function autoLoadFirstVideo() {
  if (videos.length > 0) playVideo(videos[0], 0);
}

function toggleFullscreen() {
  const videoPlayer = document.getElementById('mainVideo');
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
}

// ======================
// Mini Player Logic
// ======================
const miniPlayer = document.getElementById('miniPlayer');
const miniPlayBtn = document.getElementById('miniPlayBtn');
const miniNextBtn = document.getElementById('miniNextBtn');
const miniCloseBtn = document.querySelector('.mini-close-btn');

// Show mini player when scrolling past audio player
window.addEventListener('scroll', () => {
  const audioSection = document.querySelector('.audio-player');
  if (!audioSection) return;
  
  const rect = audioSection.getBoundingClientRect();
  if (rect.bottom < 0 && audioPlayer.currentTrack) {
    miniPlayer.classList.add('show');
  } else {
    miniPlayer.classList.remove('show');
  }
});

// Mini play/pause
miniPlayBtn.addEventListener('click', () => {
  audioPlayer.togglePlay();
  trackEvent('Mini Player', 'Play/Pause', audioPlayer.currentTrack?.name);
});

// Mini next
miniNextBtn.addEventListener('click', () => {
  audioPlayer.nextTrack();
  trackEvent('Mini Player', 'Next Track', 'Mini Player Button');
});

// Mini close
if (miniCloseBtn) {
  miniCloseBtn.addEventListener('click', () => {
    miniPlayer.classList.remove('show');
    trackEvent('Mini Player', 'Close', 'Close Button');
  });
}