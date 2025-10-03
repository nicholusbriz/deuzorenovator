// ======================
// Mobile Navigation Toggle
// ======================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
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
}

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
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181611659&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/gumpe-by-deuzo-renovator" title="Gumpe by Deuzo Renovator Official Video 2018 - deuzo renovator" target="_blank" style="color: #cccccc; text-decoration: none;">Gumpe by Deuzo Renovator Official Video 2018 - deuzo renovator</a></div>'
    },
    { 
        name: 'Mataala', 
        year: '2017', 
        type: 'Breakout Hit', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181587795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/mataala" title="mataala" target="_blank" style="color: #cccccc; text-decoration: none;">mataala</a></div>'
    },
    { 
        name: 'Sweet Love', 
        year: '2023', 
        type: 'Romantic Anthem', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181610955&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/sweet-love" title="sweet-love" target="_blank" style="color: #cccccc; text-decoration: none;">sweet-love</a></div>'
    },
    { 
        name: 'Totally', 
        year: '2024', 
        type: 'HD Video', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181605999&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/totally" title="totally" target="_blank" style="color: #cccccc; text-decoration: none;">totally</a></div>'
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
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181583215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/easy" title="easy" target="_blank" style="color: #cccccc; text-decoration: none;">easy</a></div>'
    },
    { 
        name: 'Loving A Bad Man', 
        year: '2023', 
        type: 'Single', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181584783&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/loving-a-bad-man" title="Loving-a-Bad-Man" target="_blank" style="color: #cccccc; text-decoration: none;">Loving-a-Bad-Man</a></div>'
    },
    { 
        name: 'Na Na Na', 
        year: '2023', 
        type: 'Single', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181589639&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/nanana" title="Nanana" target="_blank" style="color: #cccccc; text-decoration: none;">Nanana</a></div>'
    },
    { 
        name: 'Okukwagala', 
        year: '2018', 
        type: 'Collaboration', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181594991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/okukwagala" title="Okukwagala" target="_blank" style="color: #cccccc; text-decoration: none;">Okukwagala</a></div>'
    },
    { 
        name: 'Zikarugaho', 
        year: '2023', 
        type: 'Dancehall Banger', 
        embedCode: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2181598363&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/atbriz256" title="Atbriz256" target="_blank" style="color: #cccccc; text-decoration: none;">Atbriz256</a> · <a href="https://soundcloud.com/atbriz256/zikarugaho" title="Zikarugaho" target="_blank" style="color: #cccccc; text-decoration: none;">Zikarugaho</a></div>'
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
        embedCode: '<!-- REPLACE_WITH_EBIDONGO_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>EBIDONGO Video - Coming Soon</p></div>'
    },
    { 
        title: 'EASY', 
        year: '2025', 
        type: 'Official Video', 
        embedCode: '<!-- REPLACE_WITH_EASY_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>EASY Video - Coming Soon</p></div>'
    },
    { 
        title: 'Totally', 
        year: '2024', 
        type: 'HD Video', 
        embedCode: '<!-- REPLACE_WITH_TOTALLY_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Totally Video - Coming Soon</p></div>'
    },
    { 
        title: 'Gumpe', 
        year: '2024', 
        type: 'HD Video', 
        embedCode: '<!-- REPLACE_WITH_GUMPE_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Gumpe Video - Coming Soon</p></div>'
    },
    { 
        title: 'Loving-a-Bad-Man', 
        year: '2024', 
        type: 'HD Video', 
        embedCode: '<!-- REPLACE_WITH_LOVING_BAD_MAN_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Loving-a-Bad-Man Video - Coming Soon</p></div>'
    },
    { 
        title: 'Nanana', 
        year: '2024', 
        type: 'ft. Webby Snr & Precocious', 
        embedCode: '<!-- REPLACE_WITH_NANANA_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Nanana Video - Coming Soon</p></div>'
    },
    { 
        title: 'Okukwagala', 
        year: '2023', 
        type: 'ft. Shasha bei African', 
        embedCode: '<!-- REPLACE_WITH_OKUKWAGALA_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Okukwagala Video - Coming Soon</p></div>'
    },
    { 
        title: 'Sweet Love', 
        year: '2023', 
        type: 'Romantic Anthem', 
        embedCode: '<!-- REPLACE_WITH_SWEET_LOVE_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Sweet Love Video - Coming Soon</p></div>'
    },
    { 
        title: 'Zikarugaho', 
        year: '2023', 
        type: 'Dancehall Banger', 
        embedCode: '<!-- REPLACE_WITH_ZIKARUGAHO_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Zikarugaho Video - Coming Soon</p></div>'
    },
    { 
        title: 'Miss Yo Love', 
        year: '2019', 
        type: 'International Hit', 
        embedCode: '<!-- REPLACE_WITH_MISS_YO_LOVE_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Miss Yo Love Video - Coming Soon</p></div>'
    },
    { 
        title: 'Mataala', 
        year: '2017', 
        type: 'Breakout Hit', 
        embedCode: '<!-- REPLACE_WITH_MATAALA_YOUTUBE_EMBED --><div class="placeholder-video"><i class="fas fa-video"></i><p>Mataala Video - Coming Soon</p></div>'
    }
];

// ======================
// COMMENTS SYSTEM (Basic Implementation)
// ======================
const comments = {
    audio: {},
    video: {},
    
    init() {
        this.loadComments();
    },
    
    loadComments() {
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
// Populate Music Grid
// ======================
function populateMusicGrid() {
    const musicGrid = document.getElementById('musicGrid');
    if (!musicGrid) return;
    
    musicGrid.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackCard = document.createElement('div');
        trackCard.className = 'track-card glow-card';
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
    if (!videoGrid) return;
    
    videoGrid.innerHTML = '';
    
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card glow-card';
        videoCard.setAttribute('data-video-index', index);
        
        videoCard.onclick = () => {
            playYouTubeVideo(video, index);
            trackEvent('Video', 'Play Video', video.title);
        };
        
        const imageId = 1000 + index;
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="https://picsum.photos/seed/${imageId}/400/250" alt="${video.title}" loading="lazy">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <h4>${video.title}</h4>
            <p>${video.year} • ${video.type}</p>
        `;
        videoGrid.appendChild(videoCard);
    });
}

// ======================
// Enhanced SoundCloud Player
// ======================
function playSoundCloudTrack(track, index) {
    // Stop video if playing
    const videoContainer = document.getElementById('videoPlayerContainer');
    if (videoContainer) {
        videoContainer.style.display = 'none';
    }

    // Update UI - highlight selected track
    document.querySelectorAll('.track-card').forEach(card => card.classList.remove('active'));
    const trackCard = document.querySelector(`.track-card[data-index="${index}"]`);
    if (trackCard) trackCard.classList.add('active');

    // Create or update SoundCloud player container
    let playerContainer = document.getElementById('soundcloudPlayer');
    if (!playerContainer) {
        playerContainer = document.createElement('div');
        playerContainer.id = 'soundcloudPlayer';
        playerContainer.className = 'soundcloud-player glow-card';
        
        // Insert before the music grid
        const musicGrid = document.getElementById('musicGrid');
        if (musicGrid && musicGrid.parentNode) {
            musicGrid.parentNode.insertBefore(playerContainer, musicGrid);
        }
    }

    // Show the player container
    playerContainer.style.display = 'block';

    // Insert the embed code with enhanced styling
    playerContainer.innerHTML = `
        <div class="player-header">
            <div class="current-track-info">
                <div class="badge">Now Playing</div>
                <h3>${track.name}</h3>
                <p>${track.year} • ${track.type}</p>
            </div>
            <button class="close-player" onclick="closeSoundCloudPlayer()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="soundcloud-embed">
            ${track.embedCode}
        </div>
        <div class="track-actions">
            <button class="btn-small" onclick="shareTrack('${track.name}')">
                <i class="fas fa-share-alt"></i> Share
            </button>
            <button class="btn-small" onclick="downloadTrack('${track.name}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
        <div class="comments-section">
            <h4><i class="fas fa-comments"></i> Comments</h4>
            <div id="commentsContainer"></div>
            <form id="commentForm" class="comment-form">
                <div class="form-group">
                    <textarea id="commentInput" placeholder="Add your comment..." required></textarea>
                </div>
                <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane"></i> Post Comment
                </button>
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
                
                // Show success message
                showNotification('Comment added successfully!', 'success');
            }
        };
    }

    // Scroll to player
    playerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

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
        playerContainer.className = 'video-player-container glow-card';
        
        // Insert before the video grid
        const videoGrid = document.getElementById('videoGrid');
        if (videoGrid && videoGrid.parentNode) {
            videoGrid.parentNode.insertBefore(playerContainer, videoGrid);
        }
    }

    // Show the player container
    playerContainer.style.display = 'block';

    // Insert the embed code with enhanced styling
    playerContainer.innerHTML = `
        <div class="player-header">
            <div class="current-video-info">
                <div class="badge">Now Playing</div>
                <h3>${video.title}</h3>
                <p>${video.year} • ${video.type}</p>
            </div>
            <button class="close-player" onclick="closeYouTubePlayer()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="youtube-embed">
            ${video.embedCode}
        </div>
        <div class="video-actions">
            <button class="btn-small" onclick="shareVideo('${video.title}')">
                <i class="fas fa-share-alt"></i> Share
            </button>
            <button class="btn-small" onclick="likeVideo('${video.title}')">
                <i class="fas fa-thumbs-up"></i> Like
            </button>
        </div>
        <div class="comments-section">
            <h4><i class="fas fa-comments"></i> Comments</h4>
            <div id="commentsContainer"></div>
            <form id="commentForm" class="comment-form">
                <div class="form-group">
                    <textarea id="commentInput" placeholder="Add your comment..." required></textarea>
                </div>
                <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane"></i> Post Comment
                </button>
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
                
                // Show success message
                showNotification('Comment added successfully!', 'success');
            }
        };
    }

    // Scroll to player
    playerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    trackEvent('YouTube', 'Play Video', video.title);
}

function autoLoadFirstVideo() {
    if (videos.length > 0) playYouTubeVideo(videos[0], 0);
}

// ======================
// Utility Functions
// ======================
function closeSoundCloudPlayer() {
    const player = document.getElementById('soundcloudPlayer');
    if (player) {
        player.style.display = 'none';
    }
    
    // Remove active class from all track cards
    document.querySelectorAll('.track-card').forEach(card => card.classList.remove('active'));
}

function closeYouTubePlayer() {
    const player = document.getElementById('videoPlayerContainer');
    if (player) {
        player.style.display = 'none';
    }
    
    // Remove active class from all video cards
    document.querySelectorAll('.video-card').forEach(card => card.classList.remove('active'));
}

function shareTrack(trackName) {
    if (navigator.share) {
        navigator.share({
            title: `${trackName} - Deuzo Renovator`,
            text: `Listen to ${trackName} by Deuzo Renovator`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
    trackEvent('Share', 'Track', trackName);
}

function shareVideo(videoTitle) {
    if (navigator.share) {
        navigator.share({
            title: `${videoTitle} - Deuzo Renovator`,
            text: `Watch ${videoTitle} by Deuzo Renovator`,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
    trackEvent('Share', 'Video', videoTitle);
}

function downloadTrack(trackName) {
    // This would typically link to a download page or service
    showNotification(`Download feature for "${trackName}" coming soon!`, 'success');
    trackEvent('Download', 'Track', trackName);
}

function likeVideo(videoTitle) {
    showNotification(`Liked "${videoTitle}"!`, 'success');
    trackEvent('Like', 'Video', videoTitle);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ======================
// Dark Mode Toggle
// ======================
const darkModeBtn = document.getElementById('darkModeToggle');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkModeBtn.innerHTML = document.body.classList.contains('dark')
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
            
        // Save preference to localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
}

// ======================
// Contact Form Handling
// ======================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const purpose = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, purpose, message });
        
        // Show success message
        showNotification('Thank you for your message! Deuzo will get back to you soon.', 'success');
        contactForm.reset();
        
        // Track event
        trackEvent('Contact', 'Form Submission', 'Contact Form');
    });
}

// ======================
// Image Error Handling
// ======================
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            console.warn('Image failed to load:', this.alt);
            // You could set a placeholder image here if needed
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
// Initialize Everything
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    comments.init();
    populateMusicGrid();
    populateVideoGrid();
    initImageErrorHandling();

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        if (darkModeBtn) {
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255,255,255,0.98)';
                if (document.body.classList.contains('dark')) {
                    navbar.style.backgroundColor = 'rgba(30, 30, 46, 0.98)';
                }
            } else {
                navbar.style.backgroundColor = 'rgba(255,255,255,0.98)';
                if (document.body.classList.contains('dark')) {
                    navbar.style.backgroundColor = 'rgba(30, 30, 46, 0.98)';
                }
            }
        }
    });

    // Performance optimization - lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});