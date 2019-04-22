import { State } from './state';
import { Request } from './request';
import { FeedFactory } from './feed.factory';
import { AccountRepository } from '../repositories/account.repository';
import { MediaRepository } from '../repositories/media.repository';
import { ChallengeRepository } from '../repositories/challenge.repository';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { UploadRepository } from '../repositories/upload.repository';
import { PublishService } from '../services/publish.service';
import { DirectThreadRepository } from '../repositories/direct-thread.repository';
import { EntityFactory } from './entity.factory';
import { UserService } from '../services/user.service';
import { QeRepository } from '../repositories/qe.repository';
import { ZrRepository } from '../repositories/zr.repository';
import { LauncherRepository } from '../repositories/launcher.repository';
import { DirectRepository } from '../repositories/direct.repository';
import { LoomRepository } from '../repositories/loom.repository';

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public feed = new FeedFactory(this);
  public entity = new EntityFactory(this);
  /* Repositories */
  public challenge = new ChallengeRepository(this);
  public account = new AccountRepository(this);
  public friendship = new FriendshipRepository(this);
  public media = new MediaRepository(this);
  public upload = new UploadRepository(this);
  public direct = new DirectRepository(this);
  public directThread = new DirectThreadRepository(this);
  public qe = new QeRepository(this);
  public zr = new ZrRepository(this);
  public launcher = new LauncherRepository(this);
  public loom = new LoomRepository(this);
  /* Services */
  public user = new UserService(this);
  public publish = new PublishService(this);
}