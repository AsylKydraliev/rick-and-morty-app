import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { Character } from '../../../models/characters.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {
  char: Character | null = null;
  date!: string;

  constructor(private characterService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterService.getCharacterById(params['id']).subscribe(char => {
        this.char = char;
        this.date = new Date(char.created).toLocaleDateString();
      })
    })
  }
}
