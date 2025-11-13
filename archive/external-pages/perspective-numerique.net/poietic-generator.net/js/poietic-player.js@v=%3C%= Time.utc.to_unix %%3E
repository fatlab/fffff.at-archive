//console.log("[Player DEBUG] poietic-player.js SCRIPT EXECUTION STARTED");

import { PlayerShareManager } from './poietic-player-share.js';
import { ColorGenerator } from './poietic-color-generator.js';

class PoieticPlayer {
    constructor() {
        // État du player
        this.state = {
            events: [],
            currentEventIndex: 0,
            isPlaying: false,
            playbackSpeed: 1,
            currentSession: null,
            gridSize: 1,
            cells: new Map(),
            userPositions: new Map(),
            userColors: new Map(),
            playStartTime: null,      // Temps réel de début de lecture
            sessionDuration: 0,       // Durée totale de la session
            elapsedTime: 0,          // Temps écoulé dans la lecture
            sessionsData: null,       // Stocker toutes les données de la réponse (sessions, total, page, limit)
            currentPage: 1,           // Page courante
            itemsPerPage: 20,         // Nombre d'éléments par page
            allSubCellStates: new Map(),
            // Nouveaux états pour les filtres
            filters: {
                year: null,
                month: null,
                minDuration: null,
                maxDuration: null,
                minUsers: null,
                maxUsers: null
            }
        };

        // Éléments DOM
        this.elements = {
            sessionListUL: document.getElementById('session-list-ul'),
            totalSessionsDisplay: document.getElementById('total-sessions-display-overlay'),
            prevPageButton: document.getElementById('prev-page'),
            nextPageButton: document.getElementById('next-page'),
            pageInfoDisplay: document.getElementById('page-info'),
            playButton: document.getElementById('btn-play'),
            pauseButton: document.getElementById('btn-pause'),
            resetButton: document.getElementById('btn-reset'),
            progressBar: document.getElementById('progress-bar'),
            currentTime: document.getElementById('current-time'),
            totalTime: document.getElementById('total-time'),
            actualGrid: document.getElementById('poietic-grid'),
            mainZone: document.querySelector('.main-zone'),
            gridContainer: document.getElementById('poietic-grid-container'),
            playerStartOverlay: document.getElementById('player-overlay'),
            overlaySelectSessionButton: document.getElementById('btn-select-session-overlay'),
            sessionSelectionToolsLeft: document.getElementById('session-selection-tools'),
            sessionSelectionFiltersRight: document.getElementById('session-selection-filters-right'),
            replayExportToolsLeft: document.getElementById('replay-export-tools'),
            replayPlaybackControlsRight: document.getElementById('replay-playback-controls'),
            speedBtns: Array.from(document.querySelectorAll('.speed-btn')),
            // Nouveaux éléments pour les filtres
            filterYear: document.getElementById('filter-year'),
            filterMonth: document.getElementById('filter-month'),
            durationMin: document.getElementById('duration-min'),
            durationMax: document.getElementById('duration-max'),
            usersMin: document.getElementById('users-min'),
            usersMax: document.getElementById('users-max'),
            durationLabel: document.getElementById('duration-label'),
            usersLabel: document.getElementById('users-label'),
            filterMessage: document.getElementById('filter-message')
        };

        this.initializeGrid();
        this.bindEvents();
        this.initializeFilters();
        this.lastTimestamp = null;
        this.animationFrameId = null;
        this.eventLoop = null;
        this.filterTimeout = null;

        // Propriétés de layout
        this.layoutOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

        // Écouter les redimensionnements de fenêtre
        window.addEventListener('resize', () => {
            // Détecter le changement d'orientation
            const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
            if (newOrientation !== this.layoutOrientation) {
                this.layoutOrientation = newOrientation;
                this.updateGridSize();
            } else {
                // Juste un redimensionnement dans la même orientation
                this.updateGridSize();
            }
        });

        this.shareManager = new PlayerShareManager(this);

        this.loadSessions();

        // Appelle showOverlay après un court délai
        setTimeout(() => {
            this.setInitialView();
        }, 100); 
    }

    initializeGrid() {
        this.grid = this.elements.actualGrid; 

        if (this.grid) {
            this.grid.innerHTML = ''; // Nettoyer au cas où
        }
        this.updateGridSize();
    }

    createUserCell(userId) {
        const cell = document.createElement('div');
        cell.className = 'user-cell';
        const initialColorsPalette = this.state.userColors.get(userId);
        if (!initialColorsPalette) {
            //console.warn(`No initial colors palette found for user ${userId} in createUserCell - applying fallback`);
            for (let y = 0; y < 20; y++) {
                for (let x = 0; x < 20; x++) {
                    const subCell = document.createElement('div');
                    subCell.className = 'sub-cell';
                    subCell.dataset.x = x.toString();
                    subCell.dataset.y = y.toString();
                    subCell.style.backgroundColor = '#1a1a1a'; // Fallback un peu visible
                    cell.appendChild(subCell);
                }
            }
        } else {
            for (let y = 0; y < 20; y++) {
                for (let x = 0; x < 20; x++) {
                    const subCell = document.createElement('div');
                    subCell.className = 'sub-cell';
                    subCell.dataset.x = x.toString();
                    subCell.dataset.y = y.toString();
                    subCell.style.backgroundColor = initialColorsPalette[y * 20 + x] || '#FFFFFF';
                    cell.appendChild(subCell);
                }
            }
        }
        
        this.grid.appendChild(cell);
        this.state.cells.set(userId, cell);
        return cell;
    }

    updateGridSize() {
        if (!this.grid || !this.elements.mainZone || !this.elements.gridContainer) {
            console.warn("[Player DEBUG] Missing critical elements for updateGridSize:", this.grid, this.elements.mainZone, this.elements.gridContainer);
            return;
        }

        const mainZoneEl = this.elements.mainZone;
        const gridContainerEl = this.elements.gridContainer;
        const gridEl = this.grid;
        
        // const isLandscape = this.layoutOrientation === 'landscape'; // Non utilisé avec la nouvelle logique unifiée
        
        // Vérifier si nous sommes en mode carré (panneaux cachés) ou transition
        const aspectRatio = window.innerWidth / window.innerHeight;
        const isSquareMode = aspectRatio >= 0.9 && aspectRatio <= 1.1;
        const isTransitionMode = aspectRatio >= 0.7 && aspectRatio < 0.9;
        
        if (isSquareMode || isTransitionMode) {
            // En mode carré ou transition, laisser le CSS gérer les dimensions
            // Ne pas forcer les styles JavaScript
            return;
        }

        // Utiliser la même logique que le client principal
        // La taille devrait correspondre à la plus petite dimension
        const availableSpace = Math.min(window.innerHeight, window.innerWidth);

        // Appliquer directement à la main-zone, au grid-container, et à la grille elle-même
        mainZoneEl.style.width = `${availableSpace}px`;
        mainZoneEl.style.height = `${availableSpace}px`;

        gridContainerEl.style.width = `${availableSpace}px`;
        gridContainerEl.style.height = `${availableSpace}px`;
        
        gridEl.style.width = `${availableSpace}px`;
        gridEl.style.height = `${availableSpace}px`;

        // La taille d'une cellule dépend du nombre de cellules
        this.cellSize = availableSpace / this.state.gridSize;
        this.subCellSize = this.cellSize / 20;

        // Mettre à jour la position de toutes les cellules
        this.state.cells.forEach((cell, userId) => {
            const position = this.state.userPositions.get(userId);
            if (position) {
                this.positionCell(cell, position.x, position.y);
            }
        });
    }

    positionCell(cell, x, y) {
        const totalSize = this.grid.offsetWidth; // taille totale de la grille
        const cellSize = totalSize / this.state.gridSize; // taille d'une cellule
        
        const centerOffset = Math.floor(this.state.gridSize / 2);
        const relativeX = x + centerOffset;
        const relativeY = y + centerOffset;
        
        const position = {
            left: `${(relativeX * cellSize)}px`,
            top: `${(relativeY * cellSize)}px`,
            width: `${cellSize}px`,
            height: `${cellSize}px`
        };
        
        Object.assign(cell.style, position);
    }

    updateCellPositions() {
        this.state.cells.forEach((cell, userId) => {
            const position = this.state.userPositions.get(userId);
            if (position) {
                this.positionCell(cell, position.x, position.y);
            }
        });
    }

    bindEvents() {
        if(this.elements.playButton) this.elements.playButton.addEventListener('click', () => this.play());
        if(this.elements.pauseButton) this.elements.pauseButton.addEventListener('click', () => this.pause());
        if(this.elements.resetButton) this.elements.resetButton.addEventListener('click', () => this.resetToBeginning());
        if(this.elements.progressBar) this.elements.progressBar.addEventListener('input', () => this.seekTo(this.elements.progressBar.value));

        if (this.elements.prevPageButton) {
            this.elements.prevPageButton.addEventListener('click', () => {
                if (this.state.currentPage > 1) {
                    this.loadSessions(this.state.currentPage - 1, this.state.itemsPerPage);
                }
            });
        }
        if (this.elements.nextPageButton) {
            this.elements.nextPageButton.addEventListener('click', () => {
                if (this.state.sessionsData && this.state.currentPage < Math.ceil(this.state.sessionsData.total_sessions / this.state.itemsPerPage)) {
                    this.loadSessions(this.state.currentPage + 1, this.state.itemsPerPage);
                }
            });
        }

        // Gestion des nouveaux éléments de session
        const changeSessionAction = document.getElementById('change-session-action');
        if (changeSessionAction) {
            changeSessionAction.addEventListener('click', () => {
                // Arrêter la lecture en cours avant de changer de session
                this.pause();
                this.setSessionSelectionView();
            });
        }

        const exportVideoAction = document.getElementById('export-video-action');
        if (exportVideoAction) {
            exportVideoAction.addEventListener('click', () => {
                // Déclencher l'action d'export vidéo (existant)
                if (this.shareManager) {
                    this.shareManager.handleShare();
                }
            });
        }

        const exportImageAction = document.getElementById('export-image-action');
        if (exportImageAction) {
            exportImageAction.addEventListener('click', () => {
                // Pour le moment, inactif - peut être implémenté plus tard
                console.log('Export image - feature not yet implemented');
            });
        }

        if (this.elements.overlaySelectSessionButton) {
            this.elements.overlaySelectSessionButton.addEventListener('click', () => this.setSessionSelectionView());
        }
        
        if (this.elements.overlayPlayButton) {
            this.elements.overlayPlayButton.addEventListener('click', () => {
                if (this.state.currentSession) {
                    this.play(); 
                } else {
                    alert("Please select a session from the list first, or click 'REPLAY / SELECT'.");
                }
            });
        }

        // Gestion des boutons de vitesse
        if (this.elements.speedBtns && this.elements.speedBtns.length > 0) {
            this.elements.speedBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const speed = parseFloat(btn.dataset.speed);
                    this.setPlaybackSpeed(speed);
                });
            });
            // Initialisation de l'état visuel
            this.updateSpeedBtnUI();
        }
    }

    async loadSessions(page = 1, limit = 20) {
        try {
            this.state.currentPage = page;
            this.state.itemsPerPage = limit;

            // Construire l'URL avec les paramètres de filtrage
            const params = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString()
            });

            // Ajouter les filtres s'ils sont définis
            if (this.state.filters.year) {
                params.append('year', this.state.filters.year.toString());
            }
            if (this.state.filters.month) {
                params.append('month', this.state.filters.month.toString());
            }
            if (this.state.filters.minDuration) {
                params.append('min_duration', this.state.filters.minDuration.toString());
            }
            if (this.state.filters.maxDuration) {
                params.append('max_duration', this.state.filters.maxDuration.toString());
            }
            if (this.state.filters.minUsers) {
                params.append('min_users', this.state.filters.minUsers.toString());
            }
            if (this.state.filters.maxUsers) {
                params.append('max_users', this.state.filters.maxUsers.toString());
            }

            const response = await fetch(`/api/player/sessions?${params.toString()}`);
            //console.log("[Player DEBUG] loadSessions - fetch response status:", response.status);
            if (!response.ok) {
                //console.error("[Player DEBUG] loadSessions - Network response was not ok. Status:", response.status);
                const errorText = await response.text(); // Essayer de lire le corps de l'erreur
                //console.error("[Player DEBUG] loadSessions - Error body:", errorText);
                throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
            }
            const data = await response.json();
            //console.log("[Player DEBUG] loadSessions - data received:", data);
            
            this.state.sessionsData = data;
            const sessions = data.sessions;
            const totalSessions = data.total_sessions;

            // Mettre à jour le total des sessions (maintenant dans l'overlay)
            if (this.elements.totalSessionsDisplay) {
                this.elements.totalSessionsDisplay.textContent = totalSessions;
            } else {
                // Au cas où l'ancien élément serait encore référencé ailleurs, ou pour la compatibilité
                const oldDisplay = document.getElementById('total-sessions-display');
                if (oldDisplay) oldDisplay.textContent = totalSessions;
            }

            const sessionListUL = this.elements.sessionListUL;
            if (!sessionListUL) {
                //console.error("[Player DEBUG] sessionListUL not found in loadSessions when trying to populate");
                return;
            }
            sessionListUL.innerHTML = '';

            if (sessions && sessions.length > 0) {
                sessions.forEach(session => {
                    const listItem = document.createElement('li');
                const startTime = new Date(session.start_time);
                const dateStr = startTime.toISOString().slice(0,10).replace(/-/g,'/');
                const timeStr = startTime.toTimeString().slice(0,8);
                    const duration = session.end_time ? (new Date(session.end_time) - startTime) : (Date.now() - startTime); // Recalcul de la durée
                const durationStr = new Date(duration).toISOString().slice(11,19);
                    // const sessionIdShort = session.id.replace(/^session_/, ''); // Non utilisé

                    const firstUserUUID = session.first_user_uuid; // Récupéré de l'API

                    const miniGridPlaceholder = document.createElement('div');
                    miniGridPlaceholder.className = 'session-minigrid-placeholder';
                    // Styles CSS seront dans player-style.css, mais on peut forcer ici si besoin pour le layout grid
                    miniGridPlaceholder.style.display = 'grid';
                    miniGridPlaceholder.style.gridTemplateColumns = 'repeat(3, 1fr)';
                    miniGridPlaceholder.style.gridTemplateRows = 'repeat(3, 1fr)';
                    miniGridPlaceholder.style.width = '24px'; // Ou la taille définie en CSS
                    miniGridPlaceholder.style.height = '24px';// Ou la taille définie en CSS
                    miniGridPlaceholder.style.border = '1px solid #555';
                    miniGridPlaceholder.style.marginRight = '8px';
                    miniGridPlaceholder.style.verticalAlign = 'middle';
                    miniGridPlaceholder.style.flexShrink = '0';


                    if (firstUserUUID && typeof ColorGenerator !== 'undefined' && ColorGenerator.generateInitialColors) {
                        try {
                            const initialColors = ColorGenerator.generateInitialColors(firstUserUUID);
                            miniGridPlaceholder.innerHTML = ''; // Vider au cas où
                            for (let i = 0; i < 9; i++) { // Afficher un carré 3x3
                                const subPixel = document.createElement('div');
                                const colorIndex = Math.floor(i * (initialColors.length / 9.0));
                                subPixel.style.backgroundColor = initialColors[colorIndex] || '#1a1a1a';
                                // subPixel.style.width = '100%'; // Prendra la taille de la cellule grid
                                // subPixel.style.height = '100%';// Prendra la taille de la cellule grid
                                miniGridPlaceholder.appendChild(subPixel);
                            }
                        } catch (e) {
                            console.error("Erreur lors de la génération des couleurs pour la mini-grille:", e);
                            // Fallback au carré gris si ColorGenerator échoue
                            miniGridPlaceholder.style.backgroundColor = '#444';
                        }
                    } else {
                        miniGridPlaceholder.style.backgroundColor = '#333'; // Fond gris si pas d'UUID ou ColorGenerator non dispo
                    }

                    const textContent = document.createElement('span');
                    textContent.innerHTML = `${dateStr}-${timeStr} | ${durationStr} | <strong>Evts:</strong> ${session.event_count} | <strong>Usrs:</strong> ${session.user_count}`;
                    textContent.style.verticalAlign = 'middle';
                    textContent.style.fontSize = '0.75rem'; 

                    listItem.style.display = 'flex';
                    listItem.style.alignItems = 'center';
                    listItem.style.padding = '6px 10px';
                    listItem.style.borderBottom = '1px solid #333';
                    listItem.appendChild(miniGridPlaceholder);
                    listItem.appendChild(textContent);
                    
                    listItem.dataset.sessionId = session.id;
                    listItem.dataset.firstUserUuid = firstUserUUID || '';
                    console.log(`[LIST ITEM] Session ID: ${session.id}, Stored firstUserUUID for vignette: ${firstUserUUID}`); // LOG 1

                    listItem.addEventListener('click', () => {
                        this.state.currentSession = session.id;
                        this.state.currentSessionFirstUserUUID = listItem.dataset.firstUserUuid;
                        console.log(`[CLICK] Clicked Session ID: ${this.state.currentSession}, Using firstUserUUID for anticipated: ${this.state.currentSessionFirstUserUUID}`); // LOG 2

                        if (this.state.currentSessionFirstUserUUID) {
                            this.displayAnticipatedInitialState(
                                this.state.currentSessionFirstUserUUID,
                                1 
                            );
                        }
                        this.setReplayView();
                        sessionListUL.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
                        listItem.classList.add('selected');
                    });
                    sessionListUL.appendChild(listItem);
                });
                this.updatePaginationControls(totalSessions, page, limit);
            } else {
                sessionListUL.innerHTML = '<li>No sessions found with current filters.</li>';
                this.updatePaginationControls(0, 1, limit);
            }
        } catch (error) {
            console.error('[Player DEBUG] Erreur lors du chargement des sessions:', error);
            if (this.elements.sessionListUL) this.elements.sessionListUL.innerHTML = '<li>Error loading sessions.</li>';
            this.updatePaginationControls(0, 1, this.state.itemsPerPage || 20);
        }
    }

    updatePaginationControls(totalItems, currentPage, itemsPerPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (this.elements.pageInfoDisplay) {
            this.elements.pageInfoDisplay.textContent = `Page ${currentPage} / ${totalPages || 1}`;
        }
        if (this.elements.prevPageButton) {
            this.elements.prevPageButton.disabled = currentPage <= 1;
        }
        if (this.elements.nextPageButton) {
            this.elements.nextPageButton.disabled = currentPage >= totalPages;
        }
    }

    loadSession(sessionId) {
        fetch(`/api/player/sessions/${sessionId}/events`)
            .then(response => response.json())
            .then(events => {
                this.state.events = events;
                this.state.currentEventIndex = 0;
                this.state.elapsedTime = 0;
                this.state.currentSession = sessionId;
                this.initializeFromEvents();
                this.updateCurrentSessionInfo();
            });
    }

    updateCurrentSessionInfo() {
        // Trouver les informations de la session courante dans les données chargées
        if (this.state.sessionsData && this.state.sessionsData.sessions && this.state.currentSession) {
            const currentSessionData = this.state.sessionsData.sessions.find(
                session => session.id === this.state.currentSession
            );
            
            if (currentSessionData) {
                const startTime = new Date(currentSessionData.start_time);
                const endTime = currentSessionData.end_time ? new Date(currentSessionData.end_time) : null;
                const duration = endTime ? (endTime - startTime) : (Date.now() - startTime);
                
                const dateStr = startTime.toISOString().slice(0,10).replace(/-/g,'/');
                const durationStr = new Date(duration).toISOString().slice(11,19);
                
                const currentSessionDate = document.getElementById('current-session-date');
                const currentSessionDuration = document.getElementById('current-session-duration');
                
                if (currentSessionDate) {
                    currentSessionDate.textContent = dateStr;
                }
                if (currentSessionDuration) {
                    currentSessionDuration.textContent = durationStr;
                }
            }
        }
    }

    initializeFromEvents() {
        this.clearGridAndState();
        this.state.elapsedTime = 0;
        
        // Attendre que la grille soit prête avant d'appliquer l'état initial
        setTimeout(() => {
        const initialEvent = this.state.events.find(e => e.type === 'initial_state');
        if (initialEvent) {
            this.applyInitialState(initialEvent);
        }
        }, 0); // Délai minimal pour permettre au DOM de se mettre à jour
        
        const firstEvent = this.state.events.find(e => e.timestamp > 0);
        const lastEvent = this.state.events[this.state.events.length - 1];
        if (firstEvent && lastEvent) {
        this.state.sessionDuration = lastEvent.timestamp - firstEvent.timestamp;
        } else {
            this.state.sessionDuration = 0;
        }
        
        this.updateTimeDisplay();
    }

    clearGridAndState() {
        //console.log("[Player DEBUG] clearGridAndState called");
        if (this.grid) {
            //console.log(`[Player DEBUG] Before clear: ${this.grid.childElementCount} children in grid.`);
            this.grid.innerHTML = ''; // Vide le conteneur de la grille
            //console.log(`[Player DEBUG] After clear: ${this.grid.childElementCount} children in grid.`);
        } else {
            //console.warn("[Player DEBUG] Grid element not found in clearGridAndState");
        }
        this.state.cells.clear();
        this.state.userPositions.clear();
        //console.log("[Player DEBUG] Grid cleared and maps reset. Cells map size:", this.state.cells.size);
    }

    play() {
        if (!this.state.currentSession) {
            alert("No session selected to play.");
            this.setInitialView();
            return;
        }

        // NOUVELLE GARDE: Attendre que les événements soient chargés et la durée calculée
        if (!this.state.events || this.state.events.length === 0 || this.state.sessionDuration <= 0) {
            // console.warn("[Player DEBUG] Play attempt while events not ready or session duration invalid.");
            // Optionnel: Afficher un message à l'utilisateur ou simplement ne rien faire
            // On pourrait aussi désactiver le bouton Play jusqu'à ce que tout soit prêt.
            // Pour l'instant, on sort juste pour éviter l'erreur.
            
            // Tentative de recharger la session si elle semble vide, au cas où l'affichage anticipé seul aurait été fait
            // et que loadSession n'aurait pas été déclenché correctement par setReplayView.
            if (this.state.currentSession && (!this.state.events || this.state.events.length === 0)) {
                // console.log("[Player DEBUG] Events seem empty, forcing loadSession from play().");
                this.loadSession(this.state.currentSession);
                // On pourrait afficher un loader ici et réessayer play() après un délai
                // ou informer l'utilisateur que la session charge.
                return; 
            }
            return; // Ne pas démarrer la lecture si les conditions ne sont pas remplies
        }

        // S'assurer que la vue replay est active et que la grille est visible
        if (!this.elements.gridContainer || this.elements.gridContainer.style.display === 'none') {
            this.setReplayView(); // Assure que la grille est visible et les bons panneaux
        }

        if (this.state.currentEventIndex >= this.state.events.length && this.state.elapsedTime >= this.state.sessionDuration) {
            this.reset(); // Reset appellera setInitialView
            return; // Important de sortir ici car reset aura déjà géré l'affichage
        }
        this.state.isPlaying = true;
        this.state.playStartTime = Date.now() - (this.state.elapsedTime / this.state.playbackSpeed);
        if(this.elements.playButton) this.elements.playButton.disabled = true;
        if(this.elements.pauseButton) this.elements.pauseButton.disabled = false;
        this.startTimeLoop();
        this.startEventLoop();
    }

    startTimeLoop() {
        if (this.timeLoop) cancelAnimationFrame(this.timeLoop);
        const updateTime = () => {
            if (!this.state.isPlaying) return;
            const now = Date.now();
            this.state.elapsedTime = (now - this.state.playStartTime) * this.state.playbackSpeed;
            if (this.state.elapsedTime >= this.state.sessionDuration && this.state.sessionDuration > 0) { // Ajout sessionDuration > 0
                //console.log(`[Player DEBUG] startTimeLoop: Time elapsed...`);
                this.pause();
                this.state.elapsedTime = this.state.sessionDuration;
                this.setInitialView(); // Fin de lecture
            }
            this.updateTimeDisplay();
            this.updateProgressBar();
            this.timeLoop = requestAnimationFrame(updateTime);
        };
        this.timeLoop = requestAnimationFrame(updateTime);
    }

    startEventLoop() {
        if (this.eventLoop) clearInterval(this.eventLoop);
        let firstEventTime = this.state.events[0]?.timestamp || Date.now();

        this.eventLoop = setInterval(() => {
            if (!this.state.isPlaying) return;
            const sessionElapsed = this.state.elapsedTime;
            let eventsProcessedInCycle = 0;
            const maxEventsToProcess = Math.max(1, Math.ceil(this.state.playbackSpeed * 2));
            
            while (this.state.currentEventIndex < this.state.events.length && eventsProcessedInCycle < maxEventsToProcess) {
                const currentEvent = this.state.events[this.state.currentEventIndex];
                const eventTimeInSession = currentEvent.timestamp - firstEventTime;
                
                if (sessionElapsed >= eventTimeInSession) {
                    this.applyEvent(currentEvent);
                    this.state.currentEventIndex++;
                    eventsProcessedInCycle++;
                } else {
                    break;
                }
            }
            if (this.state.currentEventIndex >= this.state.events.length && this.state.elapsedTime >= this.state.sessionDuration && this.state.sessionDuration > 0) { // Ajout sessionDuration > 0
                //console.log(`[Player DEBUG] startEventLoop: All events played...`);
                this.pause();
                this.setInitialView(); // Fin de lecture
            }
        }, 16);
    }

    applyEvent(event) {
        switch (event.type) {
            case 'initial_state': this.applyInitialState(event); break;
            case 'new_user': this.applyNewUser(event); break;
            case 'user_update': this.applyUserUpdate(event); break;
            case 'cell_update': this.applyCellUpdate(event); break;
            case 'user_left': this.applyUserLeft(event); break;
            case 'zoom_update': this.applyZoomUpdate(event); break;
            case 'session_end': this.pause(); break;
        }
    }

    pause() {
        this.state.isPlaying = false;
        if (this.eventLoop) clearInterval(this.eventLoop);
        if (this.timeLoop) cancelAnimationFrame(this.timeLoop);
        if(this.elements.playButton) this.elements.playButton.disabled = false;
        if(this.elements.pauseButton) this.elements.pauseButton.disabled = true;
    }

    reset() {
        this.pause();
        this.state.currentEventIndex = 0;
        this.state.elapsedTime = 0;
        this.clearGridAndState();
        const initialEvent = this.state.events.find(e => e.type === 'initial_state');
        if (initialEvent) this.applyInitialState(initialEvent);
        this.updateTimeDisplay();
        this.updateProgressBar(); 
        this.setInitialView(); // Affiche l'overlay de démarrage/fin
    }

    resetToBeginning() {
        // Remet la session à zéro sans changer de vue (reste en mode lecture)
        this.pause();
        this.state.currentEventIndex = 0;
        this.state.elapsedTime = 0;
        this.clearGridAndState();
        const initialEvent = this.state.events.find(e => e.type === 'initial_state');
        if (initialEvent) this.applyInitialState(initialEvent);
        this.updateTimeDisplay();
        this.updateProgressBar();
        // Pas d'appel à setInitialView() - on reste en mode lecture
    }

    updatePlaybackSpeed() {
        // Ne fait rien, car le select n'existe plus
    }

    updateProgressBar() {
        if (!this.elements.progressBar || this.state.sessionDuration === 0) return;
        const progress = (this.state.elapsedTime / this.state.sessionDuration) * 100;
        this.elements.progressBar.value = Math.min(Math.max(progress, 0), 100);
    }

    updateTimeDisplay() {
        const formatTime = (ms) => {
            const totalSeconds = Math.max(0, Math.floor(ms / 1000));
            const minutes = Math.floor(totalSeconds / 60);
            const remainingSeconds = totalSeconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        };
        if(this.elements.currentTime) this.elements.currentTime.textContent = formatTime(this.state.elapsedTime);
        if(this.elements.totalTime) this.elements.totalTime.textContent = formatTime(this.state.sessionDuration);
    }

    clearGrid() {
        if (!this.ctx) return;
        //console.log('Effacement de la grille');
        
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const gridCells = 20;
        const cellSize = Math.floor(this.canvas.width / gridCells);
        
        this.ctx.strokeStyle = '#ccc';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i <= gridCells; i++) {
            const pos = i * cellSize;
            
            this.ctx.beginPath();
            this.ctx.moveTo(pos, 0);
            this.ctx.lineTo(pos, this.canvas.height);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, pos);
            this.ctx.lineTo(this.canvas.width, pos);
            this.ctx.stroke();
        }
    }

    redrawGrid() {
        // À implémenter : redessiner la grille complète
    }

    applyInitialState(initialEvent) {
        console.log('[APPLY INITIAL STATE] Received initialEvent:', JSON.parse(JSON.stringify(initialEvent))); // LOG 4

        if (!this.grid) {
            //console.error("[Player DEBUG] Grid element not found at start of applyInitialState");
            return;
        }   

        this.clearGridAndState(); 
        this.state.gridSize = initialEvent.grid_size || 1;
        console.log(`[APPLY INITIAL STATE] Actual gridSize from event: ${this.state.gridSize}`); // LOG 5

        this.updateGridSize(); 

        let actualFirstUserIdFromEvent = null; // Pour voir quel UUID est réellement dans l'event
        if (initialEvent.user_positions) {
            const userIdsInEvent = Object.keys(initialEvent.user_positions);
            if (userIdsInEvent.length > 0) {
                actualFirstUserIdFromEvent = userIdsInEvent[0]; // Ou une logique plus fine si plusieurs
                 if (this.state.gridSize === 1 && userIdsInEvent.length === 1) {
                    console.log(`[APPLY INITIAL STATE] Single user in event (gridSize 1): ${actualFirstUserIdFromEvent}`); // LOG 6
                 } else if (this.state.gridSize === 1 && userIdsInEvent.length > 1) {
                    console.warn(`[APPLY INITIAL STATE] gridSize is 1, but found ${userIdsInEvent.length} users in event's user_positions! Using first: ${actualFirstUserIdFromEvent}. All:`, userIdsInEvent); // LOG 6b
                 } else {
                     console.log(`[APPLY INITIAL STATE] Multiple users in event or gridSize > 1. First listed UUID in event: ${actualFirstUserIdFromEvent}. All:`, userIdsInEvent); // LOG 6c
                 }
            }
            const newUserPositions = new Map();
            Object.entries(initialEvent.user_positions).forEach(([uid, posArray]) => {
                if (Array.isArray(posArray) && posArray.length === 2) {
                    newUserPositions.set(uid, { x: posArray[0], y: posArray[1] });
                } else {
                    //console.warn(`[Player DEBUG] Invalid position format for user ${uid}:`, posArray);
                }
            });
            this.state.userPositions = newUserPositions;
            //console.log("[Player DEBUG] applyInitialState: userPositions processed:", this.state.userPositions);
        } else {
            console.warn("[APPLY INITIAL STATE] No user_positions in initialEvent!"); // LOG 7
        }

        this.state.userPositions.forEach((_position, userId) => {
            if (!this.state.userColors.has(userId)) {
                const initialColorPalette = ColorGenerator.generateInitialColors(userId);
                this.state.userColors.set(userId, initialColorPalette);
            }
        });

        this.state.userPositions.forEach((position, userId) => {
            this.createUserCell(userId);
        });

        //console.log("[Player DEBUG] applyInitialState: Repositioning cells...");
        this.state.cells.forEach((cell, userId) => {
            const userPos = this.state.userPositions.get(userId);
            if (userPos && cell) { 
                //console.log(`[Player DEBUG] Positioning cell for ${userId} with userPos:`, userPos, `(x: ${userPos.x}, y: ${userPos.y}) at grid_size ${this.state.gridSize}`);
                this.positionCell(cell, userPos.x, userPos.y);
            } else {
                //console.warn(`[Player DEBUG] Missing position or cell for user ${userId} during repositioning.`);
            }
        });

        if (initialEvent.sub_cell_states) {
            // console.log("[Player DEBUG] Updating allSubCellStates from initialEvent:", initialEvent.sub_cell_states);
            Object.entries(initialEvent.sub_cell_states).forEach(([userId, updates]) => {
                this.state.allSubCellStates.set(userId, updates);
            });
        }

        //console.log("[Player DEBUG] applyInitialState: Reapplying ALL stored sub_cell_states...");
        this.state.userPositions.forEach((position, userId) => {
            if (this.state.cells.has(userId)) {
                const userDrawingState = this.state.allSubCellStates.get(userId);
                if (userDrawingState) {
                    //console.log(`[Player DEBUG] Reapplying full drawing for user ${userId} in applyInitialState`);
                    this.applySubCellUpdates(userId, userDrawingState);
                }
            }
        });
    }

    updateSubCell(userId, x, y, color) {
        const cell = this.state.cells.get(userId);
        if (cell) {
            const subCell = cell.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (subCell) subCell.style.backgroundColor = color;
        }

        if (!this.state.allSubCellStates.has(userId)) {
            this.state.allSubCellStates.set(userId, {});
        }
        const userStoredUpdates = this.state.allSubCellStates.get(userId);
        userStoredUpdates[`${x},${y}`] = color;
    }

    applySubCellUpdates(userId, updates) {
        //console.log(`[Player DEBUG] applySubCellUpdates for user ${userId} with updates:`, updates);
        if (!updates) return;
        Object.entries(updates).forEach(([coords, color]) => {
            const [xStr, yStr] = coords.split(',');
            const x = parseInt(xStr, 10);
            const y = parseInt(yStr, 10);
            if (!isNaN(x) && !isNaN(y)) {
                this.updateSubCell(userId, x, y, color);
            }
        });
    }

    applyNewUser(event) {
        const initialColorsPalette = ColorGenerator.generateInitialColors(event.user_id);
        this.state.userColors.set(event.user_id, initialColorsPalette);
        this.state.userPositions.set(event.user_id, {x: event.position[0], y: event.position[1]});
        this.createUserCell(event.user_id);
        const cell = this.state.cells.get(event.user_id);
        if (cell) this.positionCell(cell, event.position[0], event.position[1]);

        if (this.overlay && this.state.cells.size > 0) {
            this.overlay.classList.remove('visible');
        }
        this.updateGridSize();
    }

    applyUserLeft(event) {
        const userId = event.user_id;
        const cell = this.state.cells.get(userId);
        if (cell && this.grid) this.grid.removeChild(cell);
            this.state.cells.delete(userId);
            this.state.userPositions.delete(userId);
            this.state.userColors.delete(userId);
        if (this.state.cells.size === 0 && this.overlay) {
            this.overlay.classList.add('visible');
        }
                this.updateGridSize();
            }

    applyZoomUpdate(event) {
        //console.log(`[Player DEBUG] applyZoomUpdate called with event:`, event);
        if (!this.grid) {
            //console.error("[Player DEBUG] Grid element not found in applyZoomUpdate");
            return;
        }

        this.state.gridSize = event.grid_size;
        //console.log(`[Player DEBUG] applyZoomUpdate: gridSize updated to ${this.state.gridSize}`);

        // 1. Mettre à jour la taille de la grille et cellSize AVANT de faire quoi que ce soit d'autre
        // this.updateGridSize(); // Ce sera fait après le clearGridAndState

        // 2. Nettoyer l'état des couleurs et des positions pour reconstruire
        this.state.userColors.clear(); 
        this.clearGridAndState(); // S'assure que la grille est vide et les maps aussi
        // Redéfinir gridSize après clearGridAndState car la méthode d'origine de clearGridAndState (non montrée ici) pourrait la réinitialiser
        this.state.gridSize = event.grid_size; 
        this.updateGridSize(); // Recalculer cellSize avec la nouvelle gridSize après le clear

        if (event.grid_state) {
            const gridState = typeof event.grid_state === 'string' ? JSON.parse(event.grid_state) : event.grid_state;
            if (gridState.user_positions) {
                // Mettre à jour les positions connues
                this.state.userPositions = new Map(Object.entries(gridState.user_positions));
                //console.log(`[Player DEBUG] applyZoomUpdate: userPositions updated:`, this.state.userPositions);

                Object.entries(gridState.user_positions).forEach(([userId, positionArray]) => {
                    // Générer les couleurs initiales si elles n'existent pas
                    if (!this.state.userColors.has(userId)) {
                        const initialColorsPalette = ColorGenerator.generateInitialColors(userId);
                        this.state.userColors.set(userId, initialColorsPalette);
                    }
                    
                    // Créer la cellule (elle sera ajoutée à this.grid et this.state.cells)
                    let cell = this.createUserCell(userId);
                    // Positionner la cellule avec les nouvelles coordonnées et la nouvelle cellSize
                    if (cell) this.positionCell(cell, positionArray[0], positionArray[1]);
                });
            }
        }

        if (event.sub_cell_states) {
            //console.log("[Player DEBUG] Updating allSubCellStates from zoom event:", event.sub_cell_states);
            Object.entries(event.sub_cell_states).forEach(([userId, updates]) => {
                this.state.allSubCellStates.set(userId, updates);
            });
        }

        //console.log("[Player DEBUG] applyZoomUpdate finished. Cells map size:", this.state.cells.size, "Grid children:", this.grid.childElementCount);
    }

    seekTo(percentage) {
        const targetTime = (percentage / 100) * this.state.sessionDuration;
        this.state.elapsedTime = targetTime;
        this.state.playStartTime = Date.now() - (targetTime / this.state.playbackSpeed);
        
        const firstEventTime = this.state.events[0].timestamp;
        const targetTimestamp = firstEventTime + targetTime;
        
        this.state.currentEventIndex = this.state.events.findIndex(e => 
            e.timestamp > targetTimestamp);
        
        if (this.state.currentEventIndex === -1) {
            this.state.currentEventIndex = this.state.events.length - 1;
        }
        
        this.updateTimeDisplay();
    }

    setInitialView() {
        //console.log("[Player DEBUG] setInitialView CALLED");
        //console.log("[Player DEBUG] setInitialView - playerStartOverlay:", this.elements.playerStartOverlay);

        if (this.elements.playerStartOverlay) {
            this.elements.playerStartOverlay.style.display = 'block';
            this.elements.playerStartOverlay.classList.add('visible');
        } else {
            console.error("[Player DEBUG] CRITICAL in setInitialView: playerStartOverlay element NOT FOUND!");
        }

        if (this.elements.sessionListUL) {
            this.elements.sessionListUL.style.display = 'none';
            this.elements.sessionListUL.classList.remove('visible');
        }
        if (this.elements.gridContainer) {
            this.elements.gridContainer.style.display = 'none';
        }

        // Cacher les sections des panneaux latéraux
        const panelSections = [
            this.elements.sessionSelectionToolsLeft,
            this.elements.sessionSelectionFiltersRight,
            this.elements.replayExportToolsLeft,
            this.elements.replayPlaybackControlsRight
        ];
        panelSections.forEach(panel => {
            if (panel) {
                panel.style.display = 'none';
            }
        });
        //console.log("[Player DEBUG] setInitialView FINISHED");
    }

    setSessionSelectionView() {
        //console.log("[Player DEBUG] setSessionSelectionView CALLED");
        //console.log("[Player DEBUG] setSessionSelectionView - sessionListUL:", this.elements.sessionListUL);

        if (this.elements.playerStartOverlay) {
            this.elements.playerStartOverlay.style.display = 'none';
            this.elements.playerStartOverlay.classList.remove('visible');
        }
        if (this.elements.sessionListUL) {
            this.elements.sessionListUL.style.display = 'block'; 
            this.elements.sessionListUL.classList.add('visible');
        } else {
            console.error("[Player DEBUG] CRITICAL in setSessionSelectionView: sessionListUL element NOT FOUND!");
        }
        if (this.elements.gridContainer) {
            this.elements.gridContainer.style.display = 'none';
        }

        // Configurer les panneaux latéraux pour la sélection
        if (this.elements.sessionSelectionToolsLeft) {
            this.elements.sessionSelectionToolsLeft.style.display = 'flex'; // ou block, selon ton CSS
        }
        if (this.elements.sessionSelectionFiltersRight) {
            this.elements.sessionSelectionFiltersRight.style.display = 'flex';
        }
        if (this.elements.replayExportToolsLeft) {
            this.elements.replayExportToolsLeft.style.display = 'none';
        }
        if (this.elements.replayPlaybackControlsRight) {
            this.elements.replayPlaybackControlsRight.style.display = 'none';
        }

        this.loadSessions(this.state.currentPage, this.state.itemsPerPage);
        //console.log("[Player DEBUG] setSessionSelectionView FINISHED");
    }

    setReplayView() {
        //console.log("[Player DEBUG] setReplayView CALLED");
        //console.log("[Player DEBUG] setReplayView - gridContainer:", this.elements.gridContainer);

        if (!this.state.currentSession) { 
            //console.warn("[Player DEBUG] setReplayView called without currentSession. Reverting to initial view.");
            this.setInitialView();
            return;
        }
        if (this.elements.playerStartOverlay) {
            this.elements.playerStartOverlay.style.display = 'none';
            this.elements.playerStartOverlay.classList.remove('visible');
        }
        if (this.elements.sessionListUL) {
            this.elements.sessionListUL.style.display = 'none';
            this.elements.sessionListUL.classList.remove('visible');
        }
        if (this.elements.gridContainer) {
            this.elements.gridContainer.style.display = 'block'; 
            this.elements.gridContainer.classList.add('active'); // Forcer l'affichage
            // Mettre à jour la taille de la grille après l'affichage
            // Délai plus long pour les appareils réels
            setTimeout(() => this.updateGridSize(), 100);
        } else {
            console.error("[Player DEBUG] CRITICAL in setReplayView: gridContainer element NOT FOUND!");
        }

        // Configurer les panneaux latéraux pour le replay
        if (this.elements.sessionSelectionToolsLeft) {
            this.elements.sessionSelectionToolsLeft.style.display = 'none';
        }
        if (this.elements.sessionSelectionFiltersRight) {
            this.elements.sessionSelectionFiltersRight.style.display = 'none';
        }
        if (this.elements.replayExportToolsLeft) {
            this.elements.replayExportToolsLeft.style.display = 'flex'; // ou block
        }
        if (this.elements.replayPlaybackControlsRight) {
            this.elements.replayPlaybackControlsRight.style.display = 'flex'; 
        }
        
        this.loadSession(this.state.currentSession); 
        //console.log("[Player DEBUG] setReplayView FINISHED");
    }

    applyCellUpdate(message) {
        if (message.user_id && typeof message.sub_x === 'number' &&
            typeof message.sub_y === 'number' && message.color) {
            this.updateSubCell(message.user_id, message.sub_x, message.sub_y, message.color);
            if (!this.state.allSubCellStates.has(message.user_id)) {
                this.state.allSubCellStates.set(message.user_id, {});
            }
            const userStoredUpdates = this.state.allSubCellStates.get(message.user_id);
            userStoredUpdates[`${message.sub_x},${message.sub_y}`] = message.color;
        }
    }

    // Nouvelle méthode pour changer la vitesse via boutons
    setPlaybackSpeed(speed) {
        if (this.state.isPlaying) {
            this.state.playStartTime = Date.now() - (this.state.elapsedTime / speed);
        }
        this.state.playbackSpeed = speed;
        this.updateSpeedBtnUI();
    }

    updateSpeedBtnUI() {
        if (this.elements.speedBtns && this.elements.speedBtns.length > 0) {
            this.elements.speedBtns.forEach(btn => {
                if (parseFloat(btn.dataset.speed) === this.state.playbackSpeed) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });
        }
    }

    initializeFilters() {
        // Peupler les années (de 2015 à l'année actuelle)
        const currentYear = new Date().getFullYear();
        if (this.elements.filterYear) {
            for (let year = currentYear; year >= 2015; year--) {
                const option = document.createElement('option');
                option.value = year.toString();
                option.textContent = year.toString();
                this.elements.filterYear.appendChild(option);
            }
        }

        // Event listeners pour les range sliders avec filtrage automatique
        if (this.elements.durationMin && this.elements.durationMax) {
            this.elements.durationMin.addEventListener('input', () => {
                this.updateRangeDisplay('duration');
                this.applyFiltersAutomatically();
            });
            this.elements.durationMax.addEventListener('input', () => {
                this.updateRangeDisplay('duration');
                this.applyFiltersAutomatically();
            });
        }

        if (this.elements.usersMin && this.elements.usersMax) {
            this.elements.usersMin.addEventListener('input', () => {
                this.updateRangeDisplay('users');
                this.applyFiltersAutomatically();
            });
            this.elements.usersMax.addEventListener('input', () => {
                this.updateRangeDisplay('users');
                this.applyFiltersAutomatically();
            });
        }

        // Event listeners pour les selects avec filtrage automatique
        if (this.elements.filterYear) {
            this.elements.filterYear.addEventListener('change', () => {
                this.applyFiltersAutomatically();
            });
        }

        if (this.elements.filterMonth) {
            this.elements.filterMonth.addEventListener('change', () => {
                this.applyFiltersAutomatically();
            });
        }

        // Initialiser l'affichage des ranges
        this.updateRangeDisplay('duration');
        this.updateRangeDisplay('users');
    }

    updateRangeDisplay(type) {
        if (type === 'duration') {
            const minElement = this.elements.durationMin;
            const maxElement = this.elements.durationMax;
            
            if (!minElement || !maxElement) return;
            
            let min = parseInt(minElement.value) || 0;
            let max = parseInt(maxElement.value) || 60;
            
            // Assurer des valeurs valides
            min = Math.max(0, Math.min(min, 60));
            max = Math.max(0, Math.min(max, 60));
            
            // S'assurer que min <= max avec une marge minimale de 2 pour éviter les collisions
            if (min >= max) {
                if (min === 60) {
                    max = 60;
                    min = Math.max(0, max - 2);
                } else if (max - min < 2) {
                    // Assurer une différence minimale de 2
                    if (min + 2 <= 60) {
                        max = min + 2;
                    } else {
                        min = max - 2;
                    }
                }
            }
            
            // Mettre à jour les valeurs des sliders
            minElement.value = min;
            maxElement.value = max;
            
            if (this.elements.durationLabel) {
                const maxDisplay = max >= 60 ? '60+' : max.toString();
                this.elements.durationLabel.textContent = `Duration: ${min}-${maxDisplay} min`;
            }
        } else if (type === 'users') {
            const minElement = this.elements.usersMin;
            const maxElement = this.elements.usersMax;
            
            if (!minElement || !maxElement) return;
            
            let min = parseInt(minElement.value) || 1;
            let max = parseInt(maxElement.value) || 200;
            
            // Assurer des valeurs valides
            min = Math.max(1, Math.min(min, 200));
            max = Math.max(1, Math.min(max, 200));
            
            // S'assurer que min <= max avec une marge minimale de 5 pour éviter les collisions
            if (min >= max) {
                if (min === 200) {
                    max = 200;
                    min = Math.max(1, max - 5);
                } else if (max - min < 5) {
                    // Assurer une différence minimale de 5
                    if (min + 5 <= 200) {
                        max = min + 5;
                    } else {
                        min = max - 5;
                    }
                }
            }
            
            // Mettre à jour les valeurs des sliders
            minElement.value = min;
            maxElement.value = max;
            
            if (this.elements.usersLabel) {
                const maxDisplay = max >= 200 ? '200+' : max.toString();
                this.elements.usersLabel.textContent = `Users: ${min}-${maxDisplay}`;
            }
        }
    }

    applyFiltersAutomatically() {
        // Utiliser un debounce pour éviter trop de requêtes
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        
        this.filterTimeout = setTimeout(() => {
            this.applyFilters();
        }, 300); // 300ms de délai
    }

    applyFilters() {
        // Récupérer les valeurs des filtres
        const year = this.elements.filterYear.value ? parseInt(this.elements.filterYear.value) : null;
        const month = this.elements.filterMonth.value ? parseInt(this.elements.filterMonth.value) : null;
        
        const durationMin = parseInt(this.elements.durationMin.value);
        const durationMax = parseInt(this.elements.durationMax.value);
        const usersMin = parseInt(this.elements.usersMin.value);
        const usersMax = parseInt(this.elements.usersMax.value);

        // Vérifier si on demande des sessions antérieures à décembre 2014
        if (year && year < 2015) {
            this.showFilterMessage("Sessions from previous versions of the poietic generator prior to December 2014 are not available here.");
            return;
        }

        if (year === 2014 && month && month < 12) {
            this.showFilterMessage("Sessions from previous versions of the poietic generator prior to December 2014 are not available here.");
            return;
        }

        // Mettre à jour l'état des filtres
        this.state.filters = {
            year: year,
            month: month,
            minDuration: durationMin > 0 ? durationMin * 60 : null, // Convertir en secondes
            maxDuration: durationMax < 60 ? durationMax * 60 : null, // null = pas de limite si >= 60
            minUsers: usersMin > 1 ? usersMin : null,
            maxUsers: usersMax < 200 ? usersMax : null // null = pas de limite si >= 200
        };

        // Cacher le message d'erreur
        this.hideFilterMessage();

        // Recharger les sessions avec les filtres
        this.loadSessions(1, this.state.itemsPerPage);
    }

    showFilterMessage(message) {
        if (this.elements.filterMessage) {
            this.elements.filterMessage.textContent = message;
            this.elements.filterMessage.style.display = 'block';
        }
    }

    hideFilterMessage() {
        if (this.elements.filterMessage) {
            this.elements.filterMessage.style.display = 'none';
        }
    }

    displayAnticipatedInitialState(firstUserId, initialGridSize = 1) {
        console.log(`[ANTICIPATED] Displaying for UUID: ${firstUserId}, GridSize: ${initialGridSize}`); // LOG 3
        if (!this.grid || !firstUserId) {
            // console.warn("[Player DEBUG] Anticipated display: Grid or First User ID missing.");
            return;
        }

        // console.log(`[Player DEBUG] Displaying anticipated initial state for ${firstUserId} with gridSize ${initialGridSize}`);
        
        this.state.isPlaying = false; // S'assurer que la lecture est stoppée
        if (this.eventLoop) clearInterval(this.eventLoop);
        if (this.timeLoop) cancelAnimationFrame(this.timeLoop);
        if(this.elements.playButton) this.elements.playButton.disabled = false;
        if(this.elements.pauseButton) this.elements.pauseButton.disabled = true;
        this.state.elapsedTime = 0;
        this.state.currentEventIndex = 0; // Réinitialiser l'index des événements

        this.clearGridAndState(); 

        this.state.gridSize = initialGridSize; 
        this.updateGridSize(); // Cela va aussi recalculer this.cellSize

        if (typeof ColorGenerator !== 'undefined' && ColorGenerator.generateInitialColors) {
            try {
                const initialColorsPalette = ColorGenerator.generateInitialColors(firstUserId);
                this.state.userColors.set(firstUserId, initialColorsPalette);

                const cell = this.createUserCell(firstUserId); 
                if (cell) {
                    this.state.userPositions.set(firstUserId, { x: 0, y: 0 }); 
                    this.positionCell(cell, 0, 0); // La logique de centrage pour gridSize=1 s'appliquera ici
                }
            } catch (e) {
                console.error("Erreur lors de la génération/application des couleurs pour l'état anticipé:", e);
            }
        } else {
            console.warn("ColorGenerator n'est pas disponible pour l'état anticipé.");
        }
        
        // S'assurer que l'UI est en mode "replay" pour voir la grille
        if (this.elements.playerStartOverlay) {
            this.elements.playerStartOverlay.style.display = 'none';
            this.elements.playerStartOverlay.classList.remove('visible');
        }
        if (this.elements.sessionListUL) {
            this.elements.sessionListUL.style.display = 'none';
            this.elements.sessionListUL.classList.remove('visible');
        }
        if (this.elements.gridContainer) { // Le conteneur parent de #poietic-grid
            this.elements.gridContainer.style.display = 'block'; // Ou flex selon votre CSS
            this.elements.gridContainer.classList.add('active'); 
        }
         if (this.elements.actualGrid) { // L'élément #poietic-grid lui-même
            this.elements.actualGrid.style.display = 'block'; // S'assurer qu'il est visible
        }


        if (this.elements.sessionSelectionToolsLeft) this.elements.sessionSelectionToolsLeft.style.display = 'none';
        if (this.elements.sessionSelectionFiltersRight) this.elements.sessionSelectionFiltersRight.style.display = 'none';
        if (this.elements.replayExportToolsLeft) this.elements.replayExportToolsLeft.style.display = 'flex';
        if (this.elements.replayPlaybackControlsRight) this.elements.replayPlaybackControlsRight.style.display = 'flex';
        
        this.updateTimeDisplay(); // Mettre à jour les timers à 00:00
        this.updateProgressBar(); // Mettre la barre de progression à 0
        this.updateSpeedBtnUI();  // S'assurer que le bouton de vitesse x1 est sélectionné

        // Un petit délai pour s'assurer que les dimensions de la grille sont bien appliquées avant un éventuel re-calcul
        // Cela peut aider si updateGridSize a des effets de bord liés au DOM
        setTimeout(() => {
            this.updateGridSize(); 
            // Si vous avez une fonction pour redessiner explicitement les cellules après un changement de taille :
            // this.updateCellPositions();
        }, 50); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //console.log("[Player DEBUG] DOMContentLoaded event fired. Attempting to create PoieticPlayer instance...");
    try {
    window.poieticPlayer = new PoieticPlayer();
        //console.log("[Player DEBUG] PoieticPlayer instance CREATED and assigned to window.");
    } catch (e) {
        //console.error("[Player DEBUG] ERROR during PoieticPlayer instantiation:", e, e.stack);
    }
});

//console.log("[Player DEBUG] poietic-player.js SCRIPT EXECUTION FINISHED");
//console.log("[Player DEBUG] poietic-player.js SCRIPT EXECUTION FINISHED");
