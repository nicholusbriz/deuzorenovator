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
// TRACKS with SoundCloud Embed Placeholders
// ======================
const tracks = [
  { 
    name: 'Gumpe', 
    year: '2016', 
    type: 'Debut Single', 
    embedCode: '<!-- REPLACE_WITH_GUMPE_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Gumpe will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'Mataala', 
    year: '2017', 
    type: 'Breakout Hit', 
    embedCode: '<!-- REPLACE_WITH_MATAALA_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Mataala will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'Sweet Love', 
    year: '2023', 
    type: 'Romantic Anthem', 
    embedCode: '<!-- REPLACE_WITH_SWEET_LOVE_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Sweet Love will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'Totally', 
    year: '2024', 
    type: 'HD Video', 
    embedCode: '<!-- REPLACE_WITH_TOTALLY_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Totally will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'EBIDONGO', 
    year: '2025', 
    type: 'Latest Release', 
    embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181519679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/ebidongo" title="ebidongo" target="_blank" style="color: #cccccc; text-decoration: none;">ebidongo</a></div>'
  },
  { 
    name: 'EASY', 
    year: '2025', 
    type: 'Official Video', 
    embedCode: '<!-- REPLACE_WITH_EASY_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for EASY will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'Loving A Bad Man', 
    year: '2023', 
    type: 'Single', 
    embedCode: '<!-- REPLACE_WITH_LOVING_BAD_MAN_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Loving A Bad Man will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  },
  { 
    name: 'Na Na Na', 
    year: '2023', 
    type: 'Single', 
    embedCode: '<!-- REPLACE_WITH_NANANA_SOUNDCLOUD_EMBED --><div style="text-align: center; padding: 20px; background: #f0f0f0; border-radius: 10px;"><p>SoundCloud embed for Na Na Na will appear here</p><p>Upload to SoundCloud and replace this placeholder</p></div>'
  }
];

// ======================
// VIDEOS with YouTube Embed Placeholders
// ======================
const videos = [
  { 
    title: 'EBIDONGO', 
    year: '2025', 
    type: 'Latest Release', 
    embedCode: '<!-- REPLACE_WITH_EBIDONGO_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for EBIDONGO will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'EASY', 
    year: '2025', 
    type: 'Official Video', 
    embedCode: '<!-- REPLACE_WITH_EASY_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for EASY will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Totally', 
    year: '2024', 
    type: 'HD Video', 
    embedCode: '<!-- REPLACE_WITH_TOTALLY_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Totally will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Gumpe', 
    year: '2024', 
    type: 'HD Video', 
    embedCode: '<!-- REPLACE_WITH_GUMPE_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Gumpe will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Loving-a-Bad-Man', 
    year: '2024', 
    type: 'HD Video', 
    embedCode: '<!-- REPLACE_WITH_LOVING_BAD_MAN_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Loving-a-Bad-Man will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Nanana', 
    year: '2024', 
    type: 'ft. Webby Snr & Precocious', 
    embedCode: '<!-- REPLACE_WITH_NANANA_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Nanana will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Okukwagala', 
    year: '2023', 
    type: 'ft. Shasha bei African', 
    embedCode: '<!-- REPLACE_WITH_OKUKWAGALA_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Okukwagala will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Sweet Love', 
    year: '2023', 
    type: 'Romantic Anthem', 
    embedCode: '<!-- REPLACE_WITH_SWEET_LOVE_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Sweet Love will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Zikarugaho', 
    year: '2023', 
    type: 'Dancehall Banger', 
    embedCode: '<!-- REPLACE_WITH_ZIKARUGAHO_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Zikarugaho will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Miss Yo Love', 
    year: '2019', 
    type: 'International Hit', 
    embedCode: '<!-- REPLACE_WITH_MISS_YO_LOVE_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Miss Yo Love will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  },
  { 
    title: 'Mataala', 
    year: '2017', 
    type: 'Breakout Hit', 
    embedCode: '<!-- REPLACE_WITH_MATAALA_YOUTUBE_EMBED --><div style="text-align: center; padding: 40px; background: #f0f0f0; border-radius: 10px;"><p>YouTube embed for Mataala will appear here</p><p>Upload to YouTube and replace this placeholder</p></div>'
  }
];

// ======================
// COMMENTS SYSTEM (Basic Implementation)
// ======================
const comments = {
  // In a real app, this would be stored in a database
  audio: {},
  video: {},
  
  init() {
    this.loadComments();
  },
  
  loadComments() {
    // Load from localStorage (temporary solution)
    const saved = localStorage.getItem('deuzoComments');
    if (saved) {
      const data = JSON.parse(saved);
      this.audio = data.audio || {};
      this.video = data.video || {};
    }
  },
  
  saveComments() {
    localStorage.setItem('deuzoComments', JSON.stringify({
      audio: this.audio,
      video: this.video
    }));
  },
  
  addComment(type, itemId, comment) {
    if (!this[type][itemId]) {
      this[type][itemId] = [];
    }
    
    this[type][itemId].push({
      id: Date.now(),
      text: comment,
      timestamp: new Date().toLocaleString(),
      likes: 0
    });
    
    this.saveComments();
    this.displayComments(type, itemId);
    trackEvent('Comments', 'Add Comment', `${type}-${itemId}`);
  },
  
  displayComments(type, itemId) {
    const container = document.getElementById('commentsContainer');
    if (!container) return;
    
    const commentsList = this[type][itemId] || [];
    
    container.innerHTML = commentsList.map(comment => `
      <div class="comment">
        <div class="comment-text">${comment.text}</div>
        <div class="comment-meta">
          <span class="comment-time">${comment.timestamp}</span>
          <button class="comment-like" onclick="comments.likeComment('${type}', '${itemId}', ${comment.id})">
            <i class="fas fa-heart"></i> ${comment.likes}
          </button>
        </div>
      </div>
    `).join('');
    
    if (commentsList.length === 0) {
      container.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
    }
  },
  
  likeComment(type, itemId, commentId) {
    const comment = this[type][itemId]?.find(c => c.id === commentId);
    if (comment) {
      comment.likes++;
      this.saveComments();
      this.displayComments(type, itemId);
      trackEvent('Comments', 'Like Comment', `${type}-${itemId}`);
    }
  }
};

// ======================
// INIT
// ======================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize comments system
  comments.init();
  
  // Remove old audio player init since we're using SoundCloud now
  // audioPlayer.init(); // COMMENTED OUT - Using SoundCloud embeds instead
  
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

  // Comments form
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', e => {
      e.preventDefault();
      const commentInput = document.getElementById('commentInput');
      const comment = commentInput.value.trim();
      
      if (comment) {
        const currentMediaType = document.body.getAttribute('data-current-media-type') || 'audio';
        const currentMediaId = document.body.getAttribute('data-current-media-id') || 'default';
        
        comments.addComment(currentMediaType, currentMediaId, comment);
        commentInput.value = '';
        
        alert('Comment added successfully!');
      }
    });
  }

  // Keyboard shortcuts - COMMENTED OUT since we're using embeds
  // document.addEventListener('keydown', handleKeyboardShortcuts);
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
// Keyboard Shortcuts - COMMENTED OUT for now
// ======================
/*
function handleKeyboardShortcuts(e) {
  // Ignore if user is typing in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  switch(e.code) {
    case 'Space':
      e.preventDefault();
      // audioPlayer.togglePlay(); // Not applicable with SoundCloud embeds
      break;
    case 'ArrowRight':
      // audioPlayer.nextTrack(); // Not applicable with SoundCloud embeds
      break;
    case 'ArrowLeft':
      // audioPlayer.previousTrack(); // Not applicable with SoundCloud embeds
      break;
  }
}
*/

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
      playSoundCloudTrack(track, index);
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
      playYouTubeVideo(video, index);
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
// SoundCloud Player
// ======================
function playSoundCloudTrack(track, index) {
  // Stop video if playing
  const videoContainer = document.getElementById('videoPlayerContainer');
  if (videoContainer) {
    videoContainer.style.display = 'none';
  }

  // Update UI
  document.querySelectorAll('.track-card').forEach(card => card.classList.remove('active'));
  const trackCard = document.querySelector(`.track-card[data-index="${index}"]`);
  if (trackCard) trackCard.classList.add('active');

  // Create or update SoundCloud player container
  let playerContainer = document.getElementById('soundcloudPlayer');
  if (!playerContainer) {
    playerContainer = document.createElement('div');
    playerContainer.id = 'soundcloudPlayer';
    playerContainer.className = 'soundcloud-player';
    document.querySelector('.audio-player').appendChild(playerContainer);
  }

  // Show the player container
  playerContainer.style.display = 'block';

  // Insert the embed code
  playerContainer.innerHTML = `
    <div class="current-track-info">
      <h3>Now Playing: ${track.name}</h3>
      <p>${track.year} • ${track.type}</p>
    </div>
    ${track.embedCode}
    <div class="comments-section">
      <h4>Comments</h4>
      <div id="commentsContainer"></div>
      <form id="commentForm" class="comment-form">
        <textarea id="commentInput" placeholder="Add a comment..." required></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  `;

  // Set current media for comments
  document.body.setAttribute('data-current-media-type', 'audio');
  document.body.setAttribute('data-current-media-id', track.name);

  // Load comments for this track
  comments.displayComments('audio', track.name);

  // Re-initialize comment form for this track
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.onsubmit = (e) => {
      e.preventDefault();
      const commentInput = document.getElementById('commentInput');
      const comment = commentInput.value.trim();
      
      if (comment) {
        comments.addComment('audio', track.name, comment);
        commentInput.value = '';
      }
    };
  }

  trackEvent('SoundCloud', 'Play Track', track.name);
}

// ======================
// YouTube Video Player
// ======================
function playYouTubeVideo(video, index) {
  // Hide audio player if visible
  const audioContainer = document.getElementById('soundcloudPlayer');
  if (audioContainer) {
    audioContainer.style.display = 'none';
  }

  // Update UI
  document.querySelectorAll('.video-card').forEach(card => card.classList.remove('active'));
  const videoCard = document.querySelector(`.video-card[data-video-index="${index}"]`);
  if (videoCard) videoCard.classList.add('active');

  // Create or update YouTube player container
  let playerContainer = document.getElementById('videoPlayerContainer');
  if (!playerContainer) {
    playerContainer = document.createElement('div');
    playerContainer.id = 'videoPlayerContainer';
    playerContainer.className = 'video-player-container';
    document.querySelector('.video-player-section').appendChild(playerContainer);
  }

  // Show the player container
  playerContainer.style.display = 'block';

  // Insert the embed code
  playerContainer.innerHTML = `
    <div class="current-video-info">
      <h3>Now Playing: ${video.title}</h3>
      <p>${video.year} • ${video.type}</p>
    </div>
    <div class="video-embed">
      ${video.embedCode}
    </div>
    <div class="comments-section">
      <h4>Comments</h4>
      <div id="commentsContainer"></div>
      <form id="commentForm" class="comment-form">
        <textarea id="commentInput" placeholder="Add a comment..." required></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  `;

  // Set current media for comments
  document.body.setAttribute('data-current-media-type', 'video');
  document.body.setAttribute('data-current-media-id', video.title);

  // Load comments for this video
  comments.displayComments('video', video.title);

  // Re-initialize comment form for this video
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.onsubmit = (e) => {
      e.preventDefault();
      const commentInput = document.getElementById('commentInput');
      const comment = commentInput.value.trim();
      
      if (comment) {
        comments.addComment('video', video.title, comment);
        commentInput.value = '';
      }
    };
  }

  trackEvent('YouTube', 'Play Video', video.title);
}

function autoLoadFirstVideo() {
  if (videos.length > 0) playYouTubeVideo(videos[0], 0);
}

// ======================
// Mini Player Logic - COMMENTED OUT for now
// ======================
/*
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
*/

// ======================
// INSTRUCTIONS FOR YOU:
// ======================
/*
INSTRUCTIONS FOR SOUNDCLOUD:
1. Upload each song to SoundCloud
2. Get the embed code for each track
3. Replace the placeholder embedCode in the tracks array
4. Example SoundCloud embed format:
   <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

INSTRUCTIONS FOR YOUTUBE:
1. Upload each video to YouTube
2. Get the embed code for each video
3. Replace the placeholder embedCode in the videos array
4. Example YouTube embed format:
   <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

COMMENTS SYSTEM:
- Comments are stored in browser localStorage (temporary)
- In production, you'd need a backend database
- Each audio track and video has its own comment thread
- Users can like comments

NEXT STEPS:
1. Upload all audio files to SoundCloud
2. Upload all video files to YouTube
3. Replace all placeholder embed codes with real ones
4. Remove large audio/video files from your Git repository
5. Push the updated code to GitHub
*/