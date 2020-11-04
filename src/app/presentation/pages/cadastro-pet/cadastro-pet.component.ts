import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { faImage, faPaw } from "@fortawesome/free-solid-svg-icons"
import { Router } from "@angular/router"
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"
import base64ToBlob from "b64-to-blob"
import { CreatePetUseCase } from "../../../domain/use_cases/pet/create_pet/create_pet_use_case"
import { Failure } from "../../../core/types/failure"

@Component({
  selector: "app-cadastro-pet",
  templateUrl: "./cadastro-pet.component.html",
  styleUrls: ["./cadastro-pet.component.scss"],
})
export class CadastroPetComponent implements OnInit {
  faImage = faImage

  faPaw = faPaw

  url = "../../../../assets/imagens/upload-icon.png"

  animais = ["Cachorro", "Gato"]

  public cadastroForm: FormGroup

  errorMessage = ""

  petBase64Photo = ""

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: Router,
    private readonly createPetUseCase: CreatePetUseCase,
    private readonly camera: Camera
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: this.formBuilder.control("", Validators.required),
      tipo: this.formBuilder.control(null, [Validators.required]),
      raca: this.formBuilder.control(""),
      observacoes: this.formBuilder.control(""),
      age: this.formBuilder.control(""),
    })
    this.addClass()
  }

  getPetPhoto = async () => {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
    }

    this.petBase64Photo = await this.camera
      .getPicture(options)
      .then((data: string) => `data:image/jpeg;base64,${data}`)
  }

  onSubmit() {
    const name = this.cadastroForm.get("nome").value
    const type = this.cadastroForm.get("tipo").value
    const race = this.cadastroForm.get("raca").value
    const observations = this.cadastroForm.get("observacoes").value
    const age = this.cadastroForm.get("age").value || 3

    const blob = base64ToBlob(this.petBase64Photo)

    const formData = new FormData()

    formData.append("file", blob)

    this.createPetUseCase
      .execute({
        name,
        type,
        race,
        observations,
        age,
        photo: formData,
      })
      .subscribe(
        _pet => this.route.navigate(["/home"]),
        ([error]: Failure[]) => {
          this.errorMessage = error.message
        }
      )
  }

  addClass() {
    document.querySelector("body").style.background = "#fff"
  }
}
